
const addToCartButtons = document.querySelectorAll(".item-card button");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const card = e.target.parentNode.parentNode;
    const cardData = parseMenuItemCard(card);
    cartSubject.addItem(cardData);
  });
});

function parseMenuItemCard(card) {
  const id = card.id;
  const name = card.getElementsByTagName("h5")[0].textContent;
  const price = card.getElementsByTagName("p")[0].textContent;
  const img = card
    .getElementsByTagName("img")[0]
    .getAttribute("src")
    .split("/")
    .slice(-1)[0];
  return { id, name, price, img };
}
