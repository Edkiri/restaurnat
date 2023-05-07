
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
    super.notify(this);
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
  }
}
