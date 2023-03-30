/*================================= ADD PRODUCT =================================*/
const showAddMenu = document.querySelector(".test-btn1");
const closeMenu = document.querySelector(".close-btn");

showAddMenu.addEventListener("click", () => {
    document.querySelector(".popup1").classList.add("active");
});

closeMenu.addEventListener("click", () => {
    document.querySelector(".popup1").classList.remove("active");
});

