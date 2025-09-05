import OilDescription from "../ui/OilDescription";
import Button from "../utilities/Button";
function CtaSection() {
  return (
    <section className="flex w-[100dwh] flex-col gap-20 px-10 py-14 text-green-900 lg:flex-row lg:justify-between lg:px-20 lg:py-28">
      <div className="h-full w-full">
        <img src="/avoca-images/Product.webp" alt="avoca oil product image" />
      </div>
      <div className="w-full">
        <OilDescription>
          <Button>Add to Cart</Button>
        </OilDescription>
      </div>
    </section>
  );
}

export default CtaSection;
