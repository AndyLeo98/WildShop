//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>  SCRIPT FOR HOMEPAGE PRODUCT SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import products from "./data.js";

// const productSection = document.querySelector(".productSection");

//Create the filterSection div for the buttons, add a class and add it to the
//productSection div
const filterSection = document.querySelector(".filterSection");

// Create the filter buttons

const allButton = document.createElement("button");
allButton.classList.add("filterButton");
allButton.innerHTML = "All";
allButton.onclick = function () {
  setFilterItem("all");
};
filterSection.appendChild(allButton);

const topsButton = document.createElement("button");
topsButton.classList.add("filterButton");
topsButton.innerHTML = "Tops";
topsButton.onclick = function () {
  setFilterItem("tops");
};
filterSection.appendChild(topsButton);

const bottomsButton = document.createElement("button");
bottomsButton.classList.add("filterButton");
bottomsButton.innerHTML = "Bottoms";
bottomsButton.onclick = function () {
  setFilterItem("bottoms");
};

filterSection.appendChild(bottomsButton);

const acessoriesButton = document.createElement("button");
acessoriesButton.classList.add("filterButton");
acessoriesButton.innerHTML = "Accessories";
acessoriesButton.onclick = function () {
  setFilterItem("accessories");
};
filterSection.appendChild(acessoriesButton);

const shoesButton = document.createElement("button");
shoesButton.classList.add("filterButton");
shoesButton.innerHTML = "Shoes";
shoesButton.onclick = function () {
  setFilterItem("shoes");
};
filterSection.appendChild(shoesButton);

const productCards = document.querySelector(".productCards");

//Create the function to create the product cards
function createHomepageProductCards(id, imageUrl, title, price) {
  //Create the productCard link, add a class and add it to the productCards div
  const productCard = document.createElement("a");
  productCard.href = "productPage.html";
  productCard.onclick = function () {
    setItemDetail(id);
  };
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

function setItemDetail(id) {
  localStorage.setItem("detail", id);
}

function setFilterItem(category) {
  localStorage.setItem("productsList", category);
  window.location.reload();
}

//Create the loop to call the function
// for (let i = 0; i < products.length; i++) {
//   createHomepageProductCards(
//     products[i].id,
//     products[i].image,
//     products[i].title,
//     products[i].price
//   );
// }

// function to filter
function filterObject(array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      createHomepageProductCards(
        products[i].id,
        products[i].image,
        products[i].title,
        products[i].price,
        products[i].description
      );
    }
  }
}
// LOCAL STORAGE
let productsList = localStorage.getItem("productsList");
const productCard = document.querySelector(".productCard");
switch (productsList) {
  case "accessories":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "accessories");
    break;
  case "shoes":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "shoes");
    break;
  case "bottoms":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "bottoms");
    break;
  case "tops":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    filterObject(products, "category", "tops");
    break;
  case "all":
    while (productCards.firstChild) {
      productCards.removeChild(productCard.firstChild);
    }
    for (let i = 0; i < products.length; i++) {
      createHomepageProductCards(
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
      createHomepageProductCards(
        products[i].id,
        products[i].image,
        products[i].title,
        products[i].price,
        products[i].description
      );
    }
    break;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
