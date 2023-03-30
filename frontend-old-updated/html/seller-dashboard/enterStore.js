const showStoreAddMenu = document.querySelector(".test-btn2");
const closeMenu = document.querySelector(".close-btn");

showStoreAddMenu.addEventListener("click", () => {
    document.querySelector(".popup2").classList.add("active");
});

closeMenu.addEventListener("click", () => {
    document.querySelector(".popup2").classList.remove("active");
});