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
