//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  SCRIPT FOR PRODUCT PAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import products from "./data.js";
// localStorage.setItem("productsList", "all");

const productCards = document.querySelector(".productCards");

/// Create the function to create the cards
function createProductCards(id, imageUrl, title, price, description) {
  //Create the productCard div, add a class and add it to the productCards div
  const productCard = document.createElement("div");
  productCard.classList.add("productCard");
  productCards.appendChild(productCard);
  //
  const productHeader = document.createElement("div");
  productHeader.classList.add("productHeader");
  productCard.appendChild(productHeader);
  //Create de productImg div, add the image as background, add a class and add it to the productHeader div
  const productImg = document.createElement("div");
  productImg.style.backgroundImage = `url(${imageUrl})`;
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
  //Create the productDescription paragraph, add a class and add it to productBody div
  const productDescription = document.createElement("p");
  productDescription.classList.add("productDescription");
  productDescription.innerHTML = description;
  productBody.appendChild(productDescription);
  //Create the shopProduct button, add a class and add it to productBody div
  const shopProduct = document.createElement("button");
  shopProduct.classList.add("shopProduct");
  shopProduct.innerHTML = "Buy";
  productBody.appendChild(shopProduct);
}
// function to filter
function filterObject(array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      createProductCards(
        products[i].id,
        products[i].image,
        products[i].title,
        products[i].price,
        products[i].description
      );
    }
  }
}
/// LOCAL STORAGE
let productsList = localStorage.getItem("productsList");
const productCard = document.querySelector(".productCard");
switch (productsList) {
  case "Accessories":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "Accessories");
    break;
  case "Coats":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "Coats");
    break;
  case "Pants":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "Pants");
    break;
  case "T-shirts":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "T-shirts");
    break;
  case "all":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    for (let i = 0; i < products.length; i++) {
      createProductCards(
        products[i].id,
        products[i].image,
        products[i].title,
        products[i].price,
        products[i].description
      );
    }
    break;
  default:
    for (let i = 0; i < products.length; i++) {
      createProductCards(
        products[i].id,
        products[i].image,
        products[i].title,
        products[i].price,
        products[i].description
      );
    }
    break;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
