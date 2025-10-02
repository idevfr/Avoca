import { Link } from "react-router";
import Price from "../utilities/Price";
import Quantity from "../utilities/Quantity";
import Button from "../utilities/Button";
import { useQuantity } from "../context/quantityContext";
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";
const bundleFields = {
  id: 3,
  title: "Avoca Ultimate Bundle",
  image: "/other-product-images/bundle.webp",
  price: 14.99,
};

function Bundle() {
  const { quantity } = useQuantity();
  const obj = {
    ...bundleFields,
    quantity: quantity,
    price: bundleFields.price * quantity,
  };
  const { add, cart } = useCart();
  const ids = cart.map((c) => c.id);
  function handleAdd() {
    if (ids.includes(bundleFields.id))
      return toast.success("item is already in your cart");
    if (quantity > 0) {
      add(obj);
      toast.success("Successfully added to cart");
    } else {
      toast.error("add at least one item");
    }
  }
  return (
    <div className="flex h-full w-full flex-col gap-10 px-10 py-20 lg:flex-row">
      <div className="w-full lg:w-[50%]">
        <img
          className="w-full rounded-2xl"
          src="/other-product-images/bundle.webp"
          alt="bundle product image"
        />
      </div>
      <div className="w-full space-y-2.5 px-2 md:px-6 lg:w-[50%] lg:space-y-6 lg:px-20">
        <Price title={bundleFields.title} price={bundleFields.price} />
        <div className="space-y-4 lg:space-y-10">
          <p className="text-xl/6 tracking-wide lg:text-3xl/10">
            This Ultimate Bundle includes everything{" "}
            <span className="font-semibold underline">
              <Link to={"/oil"}> Avoca</Link>
            </span>
            ! It is a great starter pack or always good to stock up if you're
            not a newbie!
          </p>
          <div className="pl-2 text-lg lg:pl-8">
            <p className="text-xl font-semibold">Includes:</p>
            <ul className="list-disc pl-8 lg:pl-16">
              <li>Avoca 500 ml</li>
              <li>Avoca 200 ml</li>
              <li>
                Eco-Friendly
                <span className="font-semibold underline">
                  <Link to={"/bag"}> Tote Bag</Link>
                </span>
                (Complimentary)
              </li>
              <li>
                Gold Stainless{" "}
                <span className="font-semibold underline">
                  <Link to={"/pourer"}> Steel Pourer</Link>
                </span>
                (Complimentary)
              </li>
            </ul>
          </div>
        </div>
        <Quantity />
        <div className="flex flex-col gap-3.5">
          <Button handleClick={handleAdd}>Add to cart!</Button>
          <Button bg={true}>Buy now</Button>
        </div>
      </div>
    </div>
  );
}

export default Bundle;
