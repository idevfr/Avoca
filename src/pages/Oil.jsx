import AvocaImageGallarey from "../ui/AvocaImageGallarey";
import OilDescription from "../ui/OilDescription";
import Button from "../utilities/Button";
function Oil() {
  return (
    <section className="lg:scrollbar-hide flex h-auto w-full flex-col justify-between gap-10 p-10 lg:h-[90dvh] lg:flex-row lg:gap-20 lg:overflow-scroll">
      <div className="max-h-full w-full lg:w-[50%]">
        <AvocaImageGallarey />
      </div>
      <div className="lg:scrollbar-hide h-auto w-full lg:w-[50%] lg:overflow-scroll">
        <OilDescription>
          <Button>Add to Cart</Button>
          <Button>Buy now</Button>
        </OilDescription>
      </div>
    </section>
  );
}

export default Oil;
