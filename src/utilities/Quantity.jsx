import { useEffect, useState } from "react";
import { useQuantity } from "../context/quantityContext";

function Quantity({ productId, showTitle = true }) {
  const [value, setValue] = useState(0);
  const { quantity, setQuantity } = useQuantity();
  function handleInc() {
    setValue((val) => val + 1);
  }
  function handleDec() {
    // if (value > 1) setValue((val) => val - 1);
    setValue((val) => val - 1);
  }
  useEffect(() => {
    setQuantity(value);
  }, [value, setQuantity]);

  return (
    <div>
      {showTitle ? <p className="text-xl font-semibold">Quantity</p> : <></>}
      <div className="flex w-[10rem] items-center justify-center border-2 border-green-950 bg-gray-100/30 text-sm md:text-xl lg:text-3xl">
        <button onClick={handleDec} className="w-[3rem] cursor-pointer">
          -
        </button>
        <input
          onChange={(e) => setValue(Number(e.target.value))}
          value={value}
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
  );
}

export default Quantity;
