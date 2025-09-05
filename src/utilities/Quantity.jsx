function Quantity() {
  return (
    <div>
      <p className="text-xl font-semibold">Quantity</p>
      <div className="flex w-[10rem] items-center justify-center border-2 border-green-950 bg-gray-100/30 text-xl lg:text-3xl">
        <button className="w-[3rem] cursor-pointer">-</button>
        <input
          type="number"
          name="quantity"
          id="quantity"
          className="w-[3rem] text-center"
          defaultValue={1}
          min={1}
        />
        <button className="w-[3rem] cursor-pointer">+</button>
      </div>
    </div>
  );
}

export default Quantity;
