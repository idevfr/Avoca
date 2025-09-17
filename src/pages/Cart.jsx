import { Link } from "react-router";
import Button from "../utilities/Button";
import Quantity from "../utilities/Quantity";

const cartData = [
  {
    id: 1,
    title: "Gold Stainless Steel Pourer",
    image: "/other-product-images/pourer-1.webp",
    price: 10,
  },
  {
    id: 2,
    title: "Avoca Tote Bag",
    image: "/other-product-images/AvocaTote.webp",
    price: 10,
  },
  {
    id: 3,
    title: "Avoca Ultimate Bundle",
    image: "/other-product-images/bundle.webp",
    price: 10,
  },
  {
    id: 4,
    title: "Avoca Extra Virgin Avocado Oil",
    image: "/other-product-images/oil.webp",
    price: 10,
  },
];
// const cartData = [];
function Cart() {
  if (!cartData.length)
    return (
      <div className="flex min-h-[70dvh] w-full items-center justify-center px-6 py-10 lg:px-16">
        <h1 className="text-3xl font-semibold">
          Please add something to your cart !
        </h1>
      </div>
    );
  return (
    <div className="grid min-h-[70dvh] w-full gap-6 px-16 py-10 lg:gap-16">
      <div className="flex items-center justify-between tracking-wider">
        <h1 className="text-3xl font-semibold lg:text-5xl">Your Cart</h1>
        <Link className="text-sm text-blue-800 underline lg:text-xl">
          Continue shopping
        </Link>
      </div>
      <div className="flex flex-col gap-16">
        <div className="hidden w-full grid-cols-[2fr_1.5fr_0.5fr] border-b-2 lg:grid">
          <div>PRODUCT</div>
          <div>QUANTITY</div>
          <div>PRICE</div>
        </div>
        <div className="md:border-b-2">
          {cartData.map((cart, i) => {
            return (
              <div
                key={i}
                className="grid w-full grid-rows-[2fr_1fr_1fr] items-center border-b-2 pt-6 md:grid-cols-[2fr_1.5fr_0.5fr] md:border-0 lg:h-[10rem]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-[4rem] w-[4rem] md:h-[8rem] md:w-[8rem]">
                    <img
                      className="h-full w-full object-contain"
                      src={cart.image}
                      alt="product image"
                    />
                  </div>
                  <p className="text-sm font-semibold lg:text-xl">
                    {cart.title}
                  </p>
                </div>
                <div>
                  <Quantity productId={cart.id} showTitle={false} />
                </div>
                <div className="place-self-center justify-self-end pr-8 text-xl md:text-3xl">
                  ${cart.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-2.5 place-self-end">
        <div className="flex gap-6 text-2xl font-semibold">
          <p>Estimated total:</p>
          <p>${"69"}</p>
        </div>
        <div>
          <p className="text-sm tracking-wider">
            *Tax included.{" "}
            <span className="text-blue-950 underline">
              <a href="#">(Shipping)</a>
            </span>{" "}
            calculated at checkout.
          </p>
        </div>
        <div>
          <Button bg={true}>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
