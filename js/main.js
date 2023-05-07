const cartSubject = new CartSubject();

const cartListObserver = new CartListObserver();

cartSubject.subscribe(cartListObserver);