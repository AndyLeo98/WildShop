const productSection = document.querySelector(".productSection");

//Create the filterSection div, add a class and add it to the
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

//Product array
const products = [
  {
    id: 1,
    image: "https://placekitten.com/200/179",
    title: "T-shirt rosa",
    category: "T-shirts",
    price: "10€",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe perspiciatis voluptatem quisquam? Vel aliquam sed dolorem recusandae. Id enim nihil, quis vero tenetur reiciendis! Rerum quod molestiae debitis nostrum!",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pants",
    category: "Pants",
    price: 15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe perspiciatis voluptatem quisquam? Vel aliquam sed dolorem recusandae. Id enim nihil, quis vero tenetur reiciendis! Rerum quod molestiae debitis nostrum!",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    category: "Coats",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe perspiciatis voluptatem quisquam? Vel aliquam sed dolorem recusandae. Id enim nihil, quis vero tenetur reiciendis! Rerum quod molestiae debitis nostrum!",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Belt",
    category: "Accessories",
    price: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe perspiciatis voluptatem quisquam? Vel aliquam sed dolorem recusandae. Id enim nihil, quis vero tenetur reiciendis! Rerum quod molestiae debitis nostrum!",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hat",
    category: "Accessories",
    price: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe perspiciatis voluptatem quisquam? Vel aliquam sed dolorem recusandae. Id enim nihil, quis vero tenetur reiciendis! Rerum quod molestiae debitis nostrum!",
  },
];

const productCards = document.querySelector(".productCards");
//Create the function to create the product cards
function createHomepageProductCards(imageUrl, title, price) {
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
  const productTitle = document.createElement("h2");
  productTitle.classList.add("productTitle");
  productTitle.innerHTML = title;
  productBody.appendChild(productTitle);
  //Create the productPrice h3, add a class and add it to productBody div
  const productPrice = document.createElement("h3");
  productPrice.classList.add("productPrice");
  productPrice.innerHTML = price;
  productBody.appendChild(productPrice);
  //Create the shopProduct button, add a class and add it to productBody div
  const shopProductButton = document.createElement("button");
  shopProductButton.classList.add("shopProductButton");
  shopProductButton.innerHTML = "Shop";
  productBody.appendChild(shopProductButton);
}

//Create the loop to call the function
for (let i = 0; i < products.length; i++) {
  createHomepageProductCards(
    products[i].image,
    products[i].title,
    products[i].price
  );
}
