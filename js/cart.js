class CartSubject extends Subject {
  constructor() {
    super();
    this.items = [];
  }

  addItem(newItem) {
    const existingItem = this.items.find((item) => item.id === newItem.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...newItem,
        quantity: 1,
      });
    }
    const itemsJson = JSON.stringify(this.items);
    sessionStorage.setItem("cartItems", itemsJson);
    super.notify(this);
  }

  clearCart() {
    if (!this.items.length) return;
    this.items = [];
    sessionStorage.clear();
    super.notify(this);
  }

  checkSessionStorage() {
    const cartItemsJson = sessionStorage.getItem("cartItems");
    const cartItems = JSON.parse(cartItemsJson);
    if (cartItems) {
      this.items = cartItems;
      super.notify(this);
    }
  }
}

class CartListObserver {
  constructor() {
    this.cartList = document.getElementById("cartList");
  }
  notify(subject) {
    this.cartList.innerHTML = "";
    subject.items.forEach((item) => {
      const newListItem = document.createElement("li");
      newListItem.innerHTML = `
        <li class="order-item d-flex w-100 mt-3">
          <img class="img-fluid w-25" src="../images/${item.img}" alt="">
          <div class="order-item-body flex-grow-1 p-3">
            <div class="order-item-title d-flex justify-content-between">
              <h5 class="fs-5">${item.name}</h5>
              <span class="fs-5">${item.price}</span>
            </div>
            <span class="fs-6">Quantity: ${item.quantity}</span>
          </div>
        </li>
      `;
      this.cartList.appendChild(newListItem);
    });
    const total = subject.items.reduce((acc, cur) => {
      const price = parseFloat(cur.price.split(" ")[0]);
      return acc + cur.quantity * price;
    }, 0);
    const totalContainer = document.createElement("div");
    totalContainer.innerHTML = `<span class="d-inline-block pt-4 fs-3 w-100 text-center">${total.toFixed(
      2
    )} €</span>`;
    if (total) {
      this.cartList.appendChild(totalContainer);
    }
  }
}
