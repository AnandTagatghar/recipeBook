import { useState } from "react";
import "./styles.css";

var DB = {
  vegetarian: [
    {
      name: "potato chips",
      description:
        "Wash the Potatoes, Make Thin Wafers, Spread the Wafers on a Clean Cloth, Deep Fry the Potato Wafers, Remove From Oil and Serve."
    },
    {
      name: "Tomato Curry Recipe",
      description:
        "To make this side dish recipe, first of all, fry the grated apple and onion in butter until blended, Allow it to boil. Now season with salt and pepper, In a separate frying pan saute tomatoes for 5 minute, Mix the sauted tomato to the apple mixture. Cover it for a while. Serve hot with boiled rice."
    }
  ],
  nonVeg: [
    {
      name: "Butter Chicken Recipe",
      description:
        "To prepare this main course dish recipe, wash the chicken pieces under running water and pat them dry with a kitchen cloth. Marinate the chicken pieces in a bowl by mixing together curd, ginger-garlic paste, red chilli powder, tandoori chicken masala, salt (to taste) and leave it for 4-5 hours in the fridge, Place a pan over medium flame and heat 1 tablespoon of oil in it. Add the marinated chicken pieces when the oil is hot and cook for 10 minutes. The chicken will become dry, almost crispy, Simultaneously, start preparing the gravy by chopping the tomatoes into 4 pieces and adding them in a pan with 1/2 cup of water. Place the pan over medium flame and let the tomatoes get tender. Transfer these in a blender jar and blend the boiled tomatoes into a puree. Strain the mixture in a small bowl for removing lumps and seeds, Heat a pan over medium flame and add a dollop of butter in it. When the butter has melted, add ginger-garlic paste, red chilli powder and green chillies in it. Saute these for a while and pour the blended tomato puree in it. Stir it well and let it boil. Add the chicken pieces in it and mix these in. Now, add sugar and salt in it. Put a lid on the pan and cook for 15 minutes,After a while, remove the lid and sprinkle fenugreek leaves on top to add flavour to your dish. Once the gravy has thickened, transfer the dish in a bowl and garnish with fresh cream and coriander leaves. Serve hot to enjoy!.  "
    },
    {
      name: "Mutton Gravy Recipe",
      description:
        "Take a small bowl and mix together curd, salt, turmeric, ginger-garlic paste, cumin powder, and coriander powder. Now, marinate the mutton with this paste for about two hours, Put a pan on medium flame and pat oil in it. When the oil is hot enough, deep fry the potatoes and keep aside, Peel the onions, ginger and garlic, and roughly chop them in a grinder jar along with tomatoes. Grind them to a fine puree and transfer to a bowl. Keep this bowl aside, Now, put a pressure cooker on medium flame and heat mustard oil in it. When the oil is hot enough, add sugar and red chilli powder. Saute for a few seconds and add the marinated mutton pieces and bay leaf in the cooker, Add salt, turmeric and cook till oil separates from curd and the water dries up. Then, add meat masala in the mutton and cook well. Finally, add fried potatoes in the cooker and mix well along with the mutton pieces, Add water in the cooker and stir to mix well. Close the lid of the cooker and pressure cook the mutton for 2-3 whistles. When done, let the steam release on its own and then sprinkle add garam masala over the cooked mutton and garnish with chopped coriander leaves. Serve hot!. "
    }
  ]
};

function App() {
  const [recipe, setRecipe] = useState("vegetarian");
  function recipyHandler(data) {
    setRecipe(data);
  }

  return (
    <div className="App">
      <div className="pt-5">
        {Object.keys(DB).map(function (data) {
          return (
            <button
              className="mx-3 p-2 btn btn-outline-secondary"
              onClick={() => recipyHandler(data)}
              key={data}
            >
              {data}
            </button>
          );
        })}
        <hr />
      </div>
      {DB[recipe].map(function (datas) {
        return (
          <div key={datas}>
            <div className="header"> {datas.name}</div>

            <div className="mx-5 description pb-5">{datas.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
