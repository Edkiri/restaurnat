class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(obs) {
    this.observers.push(obs);
  }

  unsubscribe(obs) {
    this.observers = this.observers.filter((e) => e != obs);
  }

  notify(object) {
    this.observers.forEach((observer) => {
      observer.notify(object);
    });
  }
}
