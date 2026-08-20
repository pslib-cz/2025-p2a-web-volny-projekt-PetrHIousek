const faqItems = document.querySelectorAll(".faq__item"); /* najdi vsechny elementy s classou faq__item */

faqItems.forEach((faqItem) => { /* projdi je jeden po druhem */
  faqItem.addEventListener("toggle", () => { /* poslouchej udalost toggle a potom spust funkci */
    faqItem.classList.toggle("faq__item--open", faqItem.open); /* pridej class faq__item--open pokud je otazka otevrena, nebo ji odeber */
  });
});
