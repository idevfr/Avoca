import { useQuantity } from "../context/QuantityContext";

function Quantity({ productId, showTitle = true }) {
  const { quantity, setQuantity } = useQuantity();
  console.log(productId);
  function handleInc() {
    setQuantity((val) => val + 1);
  }
  function handleDec() {
    setQuantity((val) => (val > 1 ? val - 1 : 1));
  }

  return (
    <div>
      {showTitle ? <p className="text-xl font-semibold">Quantity</p> : <></>}
      <div className="flex w-[10rem] items-center justify-center border-2 border-green-950 bg-gray-100/30 text-sm md:text-xl lg:text-3xl">
        <button onClick={handleDec} className="w-[3rem] cursor-pointer">
          -
        </button>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          name="quantity"
          id="quantity"
          className="w-[3rem] text-center"
          value={quantity}
        />
        <button onClick={handleInc} className="w-[3rem] cursor-pointer">
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
