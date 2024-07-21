
// create a array for list of items we have
const products=[
  {
    id:1,
    title:"Air Force",
    price:119,
    colors:[
      {
      code:"black",
      img:"./img/air.png",
      },
      {
        code:"darkblue",
        img:"./img/air2.png",
          
      },
    ],
  },
  {
    id:2,
    title:"Air Jordan",
    price:149,
    colors:[
      {
      code:"light grey",
      img:"./img/jordan.png",
      },
      {
        code:"green",
        img:"./img/jordan2.png",
          
      },
    ],
  },
  {
    id:3,
    title:"blazer",
    price:109,
    colors:[
      {
      code:"lightgrey",
      img:"./img/blazer.png",
      },
      {
        code:"green",
        img:"./img/blazer2.png",
          
      },
    ],
  },
  {
    id:4,
    title:"crater",
    price:125,
    colors:[
      {
      code:"lightgrey",
      img:"./img/crater.png",
      },
      {
        code:"green",
        img:"./img/crater2.png",
          
      },
    ],
  },
  {
    id:5,
    title:"hippie",
    price:146,
    colors:[
      {
      code:"grey",
      img:"./img/crater.png",
      },
      {
        code:"orange",
        img:"./img/crater2.png",
          
      },
    ],
  },



]

let chooseitem=products[0]

// Select the wrapper element
const wrapper = document.querySelector(".sliderWrapper");

// Select all menu items
const menuItems = document.querySelectorAll(".menuItem");

// Loop through each menu item and add a click event listener
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Apply the transform style with the correct syntax using template literals
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

// Initial transform value (optional)
wrapper.style.transform = "translateX(-300vw)";

// creating a array for customization and apply effect 

