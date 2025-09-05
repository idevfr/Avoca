import { Link } from "react-router";
import Price from "../utilities/Price";
import Quantity from "../utilities/Quantity";
import Button from "../utilities/Button";

function Bundle() {
  return (
    <div className="flex h-full w-full flex-col gap-10 px-10 py-20 lg:flex-row">
      <div className="w-[50%]">
        <img
          className="w-full rounded-2xl"
          src="/other-product-images/bundle.webp"
          alt="bundle product image"
        />
      </div>
      <div className="w-[50%] space-y-6 px-20">
        <Price title="Avoca Ultimate Bundle" price="14.99" />
        <div className="space-y-10">
          <p className="text-3xl/10 tracking-wide">
            This Ultimate Bundle includes everything{" "}
            <span className="font-semibold underline">
              <Link to={"/oil"}> Avoca</Link>
            </span>
            ! It is a great starter pack or always good to stock up if you're
            not a newbie!
          </p>
          <div className="pl-8 text-lg">
            <p className="text-xl font-semibold">Includes:</p>
            <ul className="list-disc pl-16">
              <li>Avoca 500 ml</li>
              <li>Avoca 200 ml</li>
              <li>
                Eco-Friendly
                <span className="font-semibold underline">
                  <Link to={"/bag"}> Tote Bag</Link>
                </span>
                (Complimentary)
              </li>
              <li>
                Gold Stainless{" "}
                <span className="font-semibold underline">
                  <Link to={"/pourer"}> Steel Pourer</Link>
                </span>
                (Complimentary)
              </li>
            </ul>
          </div>
        </div>
        <Quantity />
        <div className="flex flex-col gap-3.5">
          <Button>Add to cart!</Button>
          <Button bg={true}>Buy now</Button>
        </div>
      </div>
    </div>
  );
}

export default Bundle;
