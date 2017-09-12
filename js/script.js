var link = document.querySelector(".form-link");
var popup = document.querySelector(".searching");
var form = popup.querySelector("form");

var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var storageAdults = localStorage ? localStorage.getItem("adults") : null;
var storageChildren = localStorage ? localStorage.getItem("children") : null;

if (storageAdults) {
      adults.value = storageAdults;
} 

if (storageChildren) {
      children.value = storageChildren;
} 

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("order-form-hide");
	if (!popup.classList.contains("order-form-hide")) {
		popup.classList.remove("order-form-show");
      	popup.classList.add("order-form-show");
		arrivalDate.focus();
	}
});

form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value 
    	|| Number(adults.value) < 1 || Number(children.value) < 0) {
      	evt.preventDefault();
      	popup.classList.remove("order-form-show");
      	popup.classList.remove("order-form-error");
      	popup.offsetWidth = popup.offsetWidth;
      	popup.classList.add("order-form-error");
    } else {
    	if (localStorage) {
      		localStorage.setItem("adults", adults.value);
      		localStorage.setItem("children", children.value);
      	}
    }
});