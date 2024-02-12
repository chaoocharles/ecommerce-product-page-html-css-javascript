const countEl = document.querySelector(".count");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const cartIcon = document.querySelector(".cart-icon");
const cartItems = document.querySelector(".cart-items");

let count = 0;

const updateCount = (newCount) => {
  count = newCount;
  countEl.textContent = count;
};

minus.addEventListener("click", () => {
  if (count > 0) {
    updateCount(count - 1);
  }
});

plus.addEventListener("click", () => {
  updateCount(count + 1);
});

cartIcon.addEventListener("click", () => {
  cartItems.classList.toggle("active");
});
