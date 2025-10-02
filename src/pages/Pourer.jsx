import toast from "react-hot-toast";
import { useCart } from "../context/cartContext";
import { useQuantity } from "../context/quantityContext";
import Button from "../utilities/Button";
import Price from "../utilities/Price";
import Quantity from "../utilities/Quantity";
const pourerFileds = {
  id: 4,
  title: "Gold Stainless Steel Pourer",
  image: "/other-product-images/pourer-1.webp",
  price: 1.99,
};

function Pourer() {
  const { quantity } = useQuantity();
  const obj = {
    ...pourerFileds,
    quantity: quantity,
    price: pourerFileds.price * quantity,
  };
  const { add, cart } = useCart();
  const ids = cart.map((c) => c.id);
  function handleAdd() {
    if (ids.includes(pourerFileds.id))
      return toast.success("item is already in your cart");
    if (quantity > 0) {
      add(obj);
      toast.success("Successfully added to cart");
    } else {
      toast.error("add at least one item");
    }
  }
  return (
    <div className="flex flex-col gap-10 py-8 text-green-950 md:gap-0 lg:flex-row lg:py-16">
      <div className="flex w-full items-center justify-center lg:w-[50%]">
        <img
          className="w-[15rem] rounded-4xl bg-orange-200/50 lg:w-[25rem]"
          src="/other-product-images/pourer-1.webp"
          alt="Tote bag image"
        />
      </div>
      <div className="w-full space-y-5 px-6 lg:w-[50%] lg:px-20">
        <Price title={pourerFileds.title} price={pourerFileds.price} />
        <div className="space-y-8 px-2 pr-0 text-xl tracking-wide lg:pr-40">
          <div className="space-y-2.5 lg:space-y-3.5">
            <h3 className="text-2xl font-semibold">Description:</h3>
            <div className="space-y-2.5 pl-8">
              <p>
                Elevate your kitchen experience with our exclusive{" "}
                <span className="font-semibold">Gold-Toned Pour Spout</span>,
                designed for precision, style, and ease. Perfectly compatible
                with our Avoca Avocado Oil bottles, this sleek spout ensures a
                <span className="font-semibold"> smooth, controlled pour</span>
                —every time.
              </p>
              <p>
                Crafted with a{" "}
                <span className="font-semibold">luxurious gold finish</span>, it
                adds a touch of elegance to your countertop, while the{" "}
                <span className="font-semibold">
                  food-grade silicone stopper
                </span>{" "}
                ensures a snug fit on standard bottle necks. The{" "}
                <span className="font-semibold">flip-top lid</span> helps keep
                your oil fresh and protected from dust and contaminants.
              </p>
              <p>
                Whether you're drizzling over salads, greasing a pan, or
                measuring for recipes, this spout transforms everyday cooking
                into a refined ritual.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Features:</h3>
            <ul className="list-disc space-y-1.5 pl-8 lg:pl-16">
              <li>Elegant gold-plated finish for a premium look</li>
              <li>Controlled, no-drip pour for mess-free use</li>
              <li>Flip-top lid for hygiene and freshness</li>
              <li>Food-safe 304 grade stainless steel with a universal fit</li>
              <li>Reusable and easy to clean</li>
              <li>
                Packed in a sustainable reusable cloth pouch that is
                multi-purpose
              </li>
            </ul>
            <p>
              <span className="font-semibold">Compatible with: </span>Avoca
              Avocado Oil (200 ml & 500 ml bottles)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <Quantity />
          <div className="flex flex-col gap-2">
            <Button handleClick={handleAdd}>Add to cart</Button>
            <Button bg={true}>Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pourer;
