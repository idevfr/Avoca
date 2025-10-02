import toast from "react-hot-toast";
import { useCart } from "../context/cartContext";
import { useQuantity } from "../context/quantityContext";
import OilDescription from "../ui/OilDescription";
import Button from "../utilities/Button";
const oilFields = {
  id: 1,
  title: "Avoca Extra Virgin Avocado Oil",
  image: "/other-product-images/oil.webp",
  price: 9.99,
};

function CtaSection() {
  const { quantity } = useQuantity();
  const obj = {
    ...oilFields,
    quantity: quantity,
    price: oilFields.price * quantity,
  };
  const { add, cart } = useCart();
  const ids = cart.map((c) => c.id);
  function handleAdd() {
    if (ids.includes(oilFields.id))
      return toast.success("item is already in your cart");
    if (quantity > 0) {
      add(obj);
      toast.success("Successfully added to cart");
    } else {
      toast.error("add at least one item");
    }
  }
  return (
    <section className="flex w-[100dwh] flex-col gap-20 px-10 py-14 text-green-900 lg:flex-row lg:justify-between lg:px-20 lg:py-28">
      <div className="h-full w-full">
        <img src="/avoca-images/Product.webp" alt="avoca oil product image" />
      </div>
      <div className="w-full">
        <OilDescription>
          <Button handleClick={handleAdd}>Add to Cart</Button>
        </OilDescription>
      </div>
    </section>
  );
}

export default CtaSection;
