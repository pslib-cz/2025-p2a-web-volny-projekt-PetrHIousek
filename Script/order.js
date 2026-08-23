const order = document.querySelector(".order");
const serviceInputs = document.querySelectorAll(".services__input");

serviceInputs.forEach((serviceInput) => {
  serviceInput.addEventListener("change", () => {
    // main si nechá jen třídu právě vybrané služby, zbytek zařídí CSS
    serviceInputs.forEach((service) => {
      order.classList.toggle("order--" + service.value, service.checked);
    });
  });
});
