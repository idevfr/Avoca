import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

function CartItems({ cart }) {
  const { remove, edit } = useCart();
  const [value, setValue] = useState(cart.quantity);
  const [updatedFields, setUpdatedFields] = useState({});
  useEffect(() => {
    setUpdatedFields({
      quantity: value,
      price: (cart.price / cart.quantity) * value,
    });
  }, [value, cart.price, cart.quantity]);
  useEffect(() => {
    edit(cart.id, updatedFields);
  }, [updatedFields, cart.id]);
  function handleInc() {
    setValue((val) => val + 1);
  }
  function handleDec() {
    setValue((val) => val - 1);
  }
  function handleRemove() {
    remove(cart.id);
  }
  console.log(updatedFields);
  return (
    <div className="grid w-full grid-rows-[2fr_1fr_1fr] items-center border-b-2 pt-6 pb-6 md:grid-cols-[2fr_1.5fr_0.5fr] md:border-0 md:pb-0 lg:h-[10rem]">
      <div className="flex items-center gap-3.5">
        <div className="h-[4rem] w-[4rem] md:h-[8rem] md:w-[8rem]">
          <img
            className="h-full w-full object-contain"
            src={cart.image}
            alt="product image"
          />
        </div>
        <p className="text-sm font-semibold lg:text-xl">{cart.title}</p>
      </div>
      <div>
        <div className="flex w-[10rem] items-center justify-center border-2 border-green-950 bg-gray-100/30 text-sm md:text-xl lg:text-3xl">
          <button onClick={handleDec} className="w-[3rem] cursor-pointer">
            -
          </button>
          <input
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            type="number"
            name="quantity"
            id="quantity"
            className="w-[3rem] text-center"
          />
          <button onClick={handleInc} className="w-[3rem] cursor-pointer">
            +
          </button>
        </div>
      </div>
      <div className="place-self-center justify-self-end pr-8 text-xl md:text-3xl">
        <div className="flex flex-row gap-6">
          <p>${cart.price.toFixed(2)}</p>
          <button
            onClick={handleRemove}
            className="border-2 px-2.5 text-lg font-semibold hover:bg-red-600 hover:text-yellow-50 active:bg-red-600 active:text-yellow-50"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
