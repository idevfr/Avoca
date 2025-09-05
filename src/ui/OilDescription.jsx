import ButtonSmall from "../utilities/ButtonSmall";
import Price from "../utilities/Price";
import Quantity from "../utilities/Quantity";
function OilDescription({ children }) {
  return (
    <div className="h-auto w-full text-green-950">
      <div className="flex w-full flex-col items-start justify-center gap-8">
        <Price title="Avoca Extra Virgin Avocado Oil" price="9.99" />
        <div className="grid grid-cols-3 justify-items-center border-y-2 border-gray-950">
          <img
            className="w-[70%]"
            src="/cta-logos/icon-anti-inflammatory.webp"
            alt="logo"
          />
          <img
            className="w-[70%]"
            src="/cta-logos/icon-heart-health.webp"
            alt="logo"
          />
          <img
            className="w-[70%]"
            src="/cta-logos/icon-high-smoke-point.webp"
            alt="logo"
          />
          <img
            className="w-[70%]"
            src="/cta-logos/icon-omega-boost.webp"
            alt="logo"
          />
          <img
            className="w-[70%]"
            src="/cta-logos/icon-rich-in-vitamins.webp"
            alt="logo"
          />
          <img
            className="w-[70%]"
            src="/cta-logos/icon-weight-management.webp"
            alt="logo"
          />
        </div>
        <div>
          <ul className="list-disc pr-0 text-lg/6 tracking-wide lg:pr-48 lg:text-xl/8">
            <li>
              Avoca oil is a versatile and healthy oil extracted from Hass
              avocados sourced from a single origin farm in sunny Mexico!
            </li>
            <li>
              Mild, slightly nutty flavor that complements various dishes
              without overpowering them.
            </li>
            <li>
              Rich in monounsaturated fats and antioxidants, supporting overall
              health.
            </li>
            <li>Promotes heart health and helps in nutrient absorption.</li>
            <li>
              Ideal for not only your salads but also cooking methods like
              frying, roasting, and grilling.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">size</p>
          <div className="space-x-4">
            <ButtonSmall active={true} text={500} />
            <ButtonSmall active={false} text={200} />
          </div>
          <Quantity />
        </div>
        <div className={`${children.length ? "flex flex-col gap-4" : "block"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default OilDescription;
