let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let imgContainerE1 = document.getElementById("imgContainer");
let recipeHeadingE1 = document.getElementById("recipeHeading");
let ingredientListContainerEl = document.getElementById("IngredientsLi");

//creating recipe heading

let recipeTitleE1 = document.createElement("h1");
recipeTitleE1.textContent = recipeObj.title;
recipeTitleE1.classList.add("recipe-title");
recipeHeadingE1.appendChild(recipeTitleE1);

//creating img

let imgE1 = document.createElement('img');
imgE1.setAttribute("src", recipeObj.imgSrc);
imgE1.classList.add("ingredients-container");
imgContainerE1.appendChild(imgE1);

for (let ingredient of recipeObj.ingredients) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient; //Correct syntax
    ingredientEl.classList.add("ingredient");
    ingredientListContainerEl.appendChild(ingredientEl);
}