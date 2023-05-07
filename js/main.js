const cartSubject = new CartSubject();

const cartListObserver = new CartListObserver();

cartSubject.subscribe(cartListObserver);

const cartClearButton = document.getElementById("cartClearButton");
cartClearButton.addEventListener("click", () => cartSubject.clearCart());
