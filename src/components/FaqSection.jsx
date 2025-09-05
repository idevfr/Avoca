import FaqEl from "../utilities/FaqEl";

function FaqSection() {
  return (
    <div className="px-8 py-8 pb-20 text-sm text-green-950 lg:px-16 lg:pb-52 lg:text-xl">
      <FaqEl
        ques={"What is avocado oil?"}
        ans={
          "Avocado oil is an edible/cooking oil extracted from the pulp of avocados. It is known for its mild flavour and high smoke point. Our product is Keto friendly, gluten free and plant based."
        }
      />
      <FaqEl
        ques={
          "What is the smoke point of avocado oil? Is it suitable for Indian cooking?"
        }
        ans={
          "Avocado oil has a high smoke point, typically around 375°F to 400°F (190°C to 204°C), making it suitable for various cooking methods, including frying and sauteing, grilling.Avocado oil is apt for Indian cooking. The flavor of the oil blends well with Indian recipes, further enhancing your favorite dishes."
        }
      />
      <FaqEl
        ques={"Is avocado oil healthy?"}
        ans={
          "Yes, avocado oil is considered a healthy cooking oil. But one should consult with their dietician or physician before consuming it frequently.Patients with kidney ailments should consult with their medical specialist before consuming avocado oil."
        }
      />
      <FaqEl
        ques={"What are the health benefits of using avocado oil?"}
        ans={
          "Yes, avocado oil is considered a healthy cooking oil. It is rich in monounsaturated fats, which are heart-healthy fats. It also contains vitamins E and K. These fats are known for reducing blood pressure, improving cholesterol, and assisting in nutrient absorption"
        }
      />
      <FaqEl
        ques={"How should I store avocado oil?"}
        ans={
          "Store avocado oil in a cool, dark place away from direct sunlight."
        }
      />
      <FaqEl
        ques={"Can I use avocado oil for skin or haircare?"}
        ans={
          "Yes, avocado oil is moisturizing and can be used on the skin. It's rich in vitamins and can be beneficial for dry or damaged skin.Using avocado oil in a hot oil therapy could be beneficial for someone with a dry scalp. Add 3-5 teaspoons of oil into a glass jar and set the jar in a kettle of freshly boiling water to preheat the oil.Regularly check the oil's temperature to keep it from becoming too hot. The oil should be warm when you take the jar out of the water and gently massage the oil into your scalp."
        }
      />
      <FaqEl
        ques={"Can individuals with avocado allergies use avocado oil?"}
        ans={
          "Individuals with avocado allergies should consult with a healthcare professional before using avocado oil."
        }
      />
    </div>
  );
}

export default FaqSection;
