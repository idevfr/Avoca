import Button from "../utilities/Button";
import Quantity from "../utilities/Quantity";

function Bag() {
  return (
    <div className="flex flex-col gap-10 py-16 text-green-950 md:gap-0 lg:flex-row">
      <div className="flex w-full items-center justify-center px-10 md:px-2 lg:w-[50%]">
        <img
          className="w-full rounded-2xl lg:w-[70%]"
          src="/other-product-images/AvocaTote.webp"
          alt="Tote bag image"
        />
      </div>
      <div className="w-full space-y-5 px-6 md:px-20 lg:w-[50%]">
        <div>
          <h1 className="text-3xl font-semibold tracking-wide lg:text-5xl">
            Avoca Tote Bag
          </h1>
          <p className="text-xl font-bold">$2.99</p>
          <p className="text-sm tracking-wider">
            *Tax included.{" "}
            <span className="text-blue-950 underline">
              <a href="#">(Shipping)</a>
            </span>{" "}
            calculated at checkout.
          </p>
        </div>
        <div>
          <h3 className="text-2xl/loose font-bold">Description</h3>
          <p className="text-xl/8 tracking-wide">
            Introducing Avoca's reusable tote bag, your new everyday companion!
            Perfect for errands, it’s crafted from eco-friendly materials,
            offering durability and style. Our tote bag is sturdy to hold all
            your essentials. Whether you're grocery shopping, heading to the
            gym, or just out and about, the Avoca tote adds a touch of fun to
            sustainability. Its sleek design and vibrant green color, make
            sustainability chic and fun. Say goodbye to single-use bags and
            embrace a chic, practical, and environmentally-friendly alternative!
          </p>
          <h3 className="text-2xl/loose font-bold">
            Material: <span className="font-normal">cotton</span>
          </h3>
        </div>
        <Quantity />
        <div className="flex flex-col gap-4">
          <Button>Add to cart</Button>
          <Button bg={true}>Buy now</Button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
