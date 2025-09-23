import { useCart } from "../context/cartContext";
import { useQuantity } from "../context/quantityContext";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import AvocaImageGallarey from "../ui/AvocaImageGallarey";
import OilDescription from "../ui/OilDescription";
import Button from "../utilities/Button";
const oilFileds = {
  id: 1,
  title: "Gold Stainless Steel Pourer",
  image: "/other-product-images/oil.webp",
  price: 10,
};
function Oil() {
  const { quantity } = useQuantity();
  const { addToCart, value } = useCart();
  const newObj = {
    ...oilFileds,
    quantity: quantity,
    price: oilFileds.price * quantity,
  };
  const ids = value.map((v) => v.id);
  function handleClick() {
    if (!quantity || quantity < 1) return alert("please add something");
    if (ids.includes(newObj.id)) return alert("item already in your cart !");
    addToCart(newObj);
  }

  return (
    <section className="lg:scrollbar-hide flex h-auto w-full flex-col justify-between gap-10 p-10 lg:h-[90dvh] lg:flex-row lg:gap-20 lg:overflow-scroll">
      <div className="max-h-full w-full lg:w-[50%]">
        <AvocaImageGallarey />
      </div>
      <div className="lg:scrollbar-hide h-auto w-full lg:w-[50%] lg:overflow-scroll">
        <OilDescription>
          <Button handleClick={handleClick}>Add to Cart</Button>
          <Button bg={true}>Buy now</Button>
        </OilDescription>
      </div>
    </section>
  );
}

export default Oil;
