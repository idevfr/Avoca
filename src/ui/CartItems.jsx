function CartItems({ cart, handler }) {
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
        {/* <Quantity productId={cart.id} showTitle={false} /> */}
        <p>QUANTITY</p>
      </div>
      <div className="place-self-center justify-self-end pr-8 text-xl md:text-3xl">
        <div className="flex flex-row gap-6">
          <p>${cart.price}</p>
          <button
            onClick={() => handler(cart.id)}
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
