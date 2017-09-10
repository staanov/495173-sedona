var link = document.querySelector(".form-link");
var popup = document.querySelector(".order-form");

if (popup.classList.contains("order-form-hide")) {
    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("order-form-hide");
});
} else {
    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("order-form-hide");
});
}