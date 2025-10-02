import toast from "react-hot-toast";
import { useCart } from "../context/cartContext";
import { useQuantity } from "../context/quantityContext";
import AvocaImageGallarey from "../ui/AvocaImageGallarey";
import OilDescription from "../ui/OilDescription";
import Button from "../utilities/Button";
const oilFileds = {
  id: 1,
  title: "Avoca Extra Virgin Avocado Oil",
  image: "/other-product-images/oil.webp",
  price: 9.99,
};
function Oil() {
  const { quantity } = useQuantity();
  const obj = {
    ...oilFileds,
    quantity: quantity,
    price: oilFileds.price * quantity,
  };
  const { add, cart } = useCart();
  const ids = cart.map((c) => c.id);
  function handleAdd() {
    if (ids.includes(oilFileds.id))
      return toast.success("item is already in your cart");
    if (quantity > 0) {
      add(obj);
      toast.success("Successfully added to cart");
    } else {
      toast.error("PLEASE...! add at least one item");
    }
  }

  return (
    <section className="lg:scrollbar-hide flex h-auto w-full flex-col justify-between gap-10 p-10 lg:h-[90dvh] lg:flex-row lg:gap-20 lg:overflow-scroll">
      <div className="max-h-full w-full lg:w-[50%]">
        <AvocaImageGallarey />
      </div>
      <div className="lg:scrollbar-hide h-auto w-full lg:w-[50%] lg:overflow-scroll">
        <OilDescription>
          <Button handleClick={handleAdd}>Add to Cart</Button>
          <Button bg={true}>Buy now</Button>
        </OilDescription>
      </div>
    </section>
  );
}

export default Oil;
