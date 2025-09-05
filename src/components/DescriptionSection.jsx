const styles = {
  header: "text-3xl md:text-5xl tracking-wider text-orange-900",
  paragraph: "text-xl md:text-2xl tracking-wide text-green-900",
  headerSmall:
    "text-2xl md:text-3xl tracking-wider text-orange-900 font-semibold",
  dot: "h-[15px] w-[15px] lg:h-[20px] lg:w-[20px] bg-orange-900 blur-[1px]",
};
function DescriptionSection() {
  return (
    <section className="h-auto w-full bg-orange-100">
      <div className="bg-[url(/avoca-images/about-bg-element-1.webp)] bg-size-[4rem] bg-top-right bg-no-repeat py-4 md:bg-size-[auto_30%] lg:flex lg:items-center lg:justify-between lg:bg-size-[auto_30%] lg:py-0">
        <div className="lg:w-[50%]">
          <img
            className="w-full"
            src="/avoca-images/oilWithAvocado.webp"
            alt="product-image"
          />
        </div>
        <div className="flex flex-col gap-0 px-4 py-8 md:gap-3 lg:w-[50%] lg:px-40">
          <h1 className={styles.header}>Farm to Table</h1>
          <p className={styles.paragraph}>
            The avocados are grown in Michoacán and bottled in India.
          </p>
          <p className={styles.paragraph}>
            We only source 100% pure and unrefined avocado oil. The avocados are
            hand sorted, never over-processed, to give you the purest emerald
            green oil.
          </p>
          <p className={styles.paragraph}>
            We deliver products that have maximum nutritional value and minimal
            environmental impact.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundPosition: "left top, 100px 100px" }}
        className="flex w-[100dwh] flex-col-reverse gap-4 bg-[url(/avoca-images/LeafLeft.avif),url(/avoca-images/features-asset-1.webp)] bg-no-repeat md:block"
      >
        <div className="w-full">
          <img
            src="/avoca-images/avocadoField.jpg"
            className="h-full w-full pb-10 pl-0 md:pl-[10rem] lg:pb-0 lg:pl-[40rem]"
            alt="avocado filed"
          />
        </div>
        <div className="flex items-end justify-between gap-4 bg-[url(/avoca-images/LeafRight.avif)] bg-right-bottom bg-no-repeat px-6 md:bg-right-top lg:px-10">
          <div className="mt-12 flex w-auto flex-col justify-center lg:px-72 lg:py-40">
            <h1 className={`${styles.header} pb-4`}>
              Here's our promise to you
            </h1>
            <p className={styles.paragraph}>
              We use handpicked premium avocados grown by generations of farmers
              in Mexico’s top avocado growing regions.
            </p>
            <p className={styles.paragraph}>
              Whether you are a culinary enthusiast looking to enhance your
              recipes or a skincare aficionado seeking radiant, supple skin, our
              avocado oil is crafted to meet your diverse needs.
            </p>
          </div>
          <div className="w-auto">
            <img
              className="w-auto"
              src="avoca-images/features-asset-2.webp"
              alt="leaf image"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 px-10 pb-14 md:grid-cols-2 lg:pb-32">
        <div className="space-y-2">
          <div className={styles.dot}></div>
          <h3 className={styles.headerSmall}>Our Roots</h3>
          <p className={styles.paragraph}>
            Avoca was born out of passion for delivering exceptional products
            that harness the goodness of Hass avocados. Our journey began with a
            simple yet profound realization – the incredible benefits of avocado
            oil.
          </p>
        </div>
        <div className="space-y-2">
          <div className={styles.dot}></div>
          <h3 className={styles.headerSmall}>The Essence of Avocado Oil</h3>
          <p className={styles.paragraph}>
            Avocado oil, often referred to as "liquid gold" is at the heart of
            our commitment. We embrace its exceptional properties: rich in
            anti-inflammatory compounds, antioxidants, and Omegas 3, 6, and 9 —
            the good fats!
          </p>
        </div>
        <div className="space-y-2">
          <div className={styles.dot}></div>
          <h3 className={styles.headerSmall}>Quality Assurance</h3>
          <p className={styles.paragraph}>
            We understand the importance of knowing what goes into your food.
            That's why we source the finest avocados from trusted growers. Our
            avocado oil undergoes rigorous testing and careful extraction to
            ensure it meets the highest standards.
          </p>
        </div>
        <div className="space-y-2">
          <div className={styles.dot}></div>
          <h3 className={styles.headerSmall}>Sustainability Matters</h3>
          <p className={styles.paragraph}>
            We're committed to making a positive impact. Our avocado oil is
            crafted in small batches using sustainably grown fruit. From
            responsible sourcing to carbon-neutral packaging, our efforts
            reflect our dedication to a healthier planet for future generations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
