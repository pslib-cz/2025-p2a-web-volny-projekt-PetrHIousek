const menu = document.querySelector(".menu"); /* najdi elemtn s classou menu */
const navigation = document.querySelector(".navigation"); /* najdi elemtn s classou navigation */

menu.addEventListener("toggle", () => { /*poslouchej událost toggle a potom spusť funkci */
  navigation.classList.toggle("menu-open", menu.open); /* přidej class menu-open pokud je menu otevřený, nebo ji odeber */
});