const colorBtnList = document.querySelectorAll(".color");
const shoesList = document.querySelectorAll(".shoe");
const bgList = document.querySelectorAll(".gradient");
const outPrice = document.querySelector("#outprice");
const sizeOptionList = document.querySelectorAll(".size-shoe");
const selectList = document.querySelector(".size-list");
const quantity = document.querySelector(".quantity");

quantity.value = 1;

let price = 170;
let quantityValue = 1;
let sizeValue = 1;

colorBtnList.forEach((btn) => {
  btn.addEventListener("click", changeCard);
});
selectList.addEventListener("input", changePriceGivenSize);
quantity.addEventListener("input", changePriceGivenQuantity);

function changeCard(event) {
  colorBtnList.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  shoesList.forEach((shoe) => {
    shoe.classList.remove("show");
    if (shoe.attributes.color.value === event.target.attributes.color.value) {
      shoe.classList.add("show");
    }
  });
  bgList.forEach((bg) => {
    bg.classList.remove("second");
    if (bg.attributes.color.value === event.target.attributes.color.value) {
      bg.classList.add("second");
    }
  });
  selectList.value = 1;
  sizeValue = 1;
  quantity.value = 1;
  quantityValue = 1;
  price = event.target.dataset.price;
  console.log(price);
  outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}

function changePriceGivenSize() {
  sizeValue = selectList.value;
  outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}

function changePriceGivenQuantity() {
  quantityValue = quantity.value;
  outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}
