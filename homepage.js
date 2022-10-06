//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>  SCRIPT FOR HOMEPAGE PRODUCT SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import products from "./data.js";

const productSection = document.querySelector(".productSection");

//Create the filterSection div for the buttons, add a class and add it to the
//productSection div
const filterSection = document.querySelector(".filterSection");

// Create the filter buttons
const topsButton = document.createElement("button");
topsButton.classList.add("filterButton");
topsButton.innerHTML = "Tops";
filterSection.appendChild(topsButton);

const bottomsButton = document.createElement("button");
bottomsButton.classList.add("filterButton");
bottomsButton.innerHTML = "Bottoms";
filterSection.appendChild(bottomsButton);

const acessoriesButton = document.createElement("button");
acessoriesButton.classList.add("filterButton");
acessoriesButton.innerHTML = "Acessories";
filterSection.appendChild(acessoriesButton);

const shoesButton = document.createElement("button");
shoesButton.classList.add("filterButton");
shoesButton.innerHTML = "Shoes";
filterSection.appendChild(shoesButton);

const productCards = document.querySelector(".productCards");
//Create the function to create the product cards
function createHomepageProductCards(imageUrl, title, price) {
  //Create the productCard link, add a class and add it to the productCards div
  const productCard = document.createElement("a");
  productCard.href = "#";
  productCard.classList.add("productCard");
  productCards.appendChild(productCard);
  //Create the image container, add a class and add it to the productCard link
  const productHeader = document.createElement("div");
  productHeader.classList.add("productHeader");
  productCard.appendChild(productHeader);
  //Create de product image, add a class and add it to the productHeader div
  const productImg = document.createElement("img");
  productImg.src = `${imageUrl}`;
  productImg.classList.add("productImg");
  productHeader.appendChild(productImg);
  // Create the productBody div and add class to it and add it to the productCard div
  const productBody = document.createElement("div");
  productBody.classList.add("productBody");
  productCard.appendChild(productBody);
  //Create the productTitle h2, add a class and add it to productBody div
  const productTitle = document.createElement("p");
  productTitle.classList.add("productTitle");
  productTitle.innerHTML = title;
  productBody.appendChild(productTitle);
  //Create the productPrice h3, add a class and add it to productBody div
  const productPrice = document.createElement("p");
  productPrice.classList.add("productPrice");
  productPrice.innerHTML = price;
  productBody.appendChild(productPrice);
}

console.log("products", products);
//Create the loop to call the function
for (let i = 0; i < products.length; i++) {
  createHomepageProductCards(
    products[i].image,
    products[i].title,
    products[i].price
  );
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
