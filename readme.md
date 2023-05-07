# MacDonal's page with Bootstrap

I completed this challenge while taking the Full Stack Developer bootcamp taught by [GeeksHubs](https://geekshubsacademy.com/producto/full-stack-developer/?utm_source=search&utm_medium=googleads&utm_campaign=Site_Link&utm_term=geekshubs&utm_campaign=S_Brand_ES&utm_source=adwords&utm_medium=ppc&hsa_acc=5482831672&hsa_cam=11058765492&hsa_grp=112100225167&hsa_ad=462342422868&hsa_src=g&hsa_tgt=kwd-729688778115&hsa_kw=geekshubs&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=Cj0KCQjwmN2iBhCrARIsAG_G2i4I5zL1r-s7VVxxwBUqn5FB8TXaWbJQaPohZTl1nZboy3gbhPPqCRIaAoILEALw_wcB). The intention behind this challenge was to specifically learn [Bootstrap](https://getbootstrap.com/){:target="_blank"}, which is why I tried to use the minimal amount of CSS possible.

I have always been resistant to using CSS frameworks because I don't like writing a lot of classes on HTML tags, it seems ugly and hard to read. But now that I've used it, I clearly understand the productivity benefits!

I built three views: home, contact, and restaurant menu, with a fully responsive navbar for navigation and a hidden menu for the shopping cart, all using only 10 lines of CSS.

I loved the [img-fluid](https://getbootstrap.com/docs/5.3/content/images/#responsive-images){:target="_blank"} class in Bootstrap, it magically makes all images responsive! I also used these components:

* [.navbar](https://getbootstrap.com/docs/5.3/components/navs-tabs/#base-nav){:target="_blank"} for main navigation between pages.
* [.offcanvas](https://getbootstrap.com/docs/5.3/components/offcanvas/#how-it-works){:target="_blank"} for hidden cart menu.
* [.card](https://getbootstrap.com/docs/5.3/components/card/#about){:target="_blank"} for every menu-item and cart-item.
* And of course, the predefined classes for spacing, displaying, and sizing in Bootstrap.

## JavaScript

Beyond the requirements of the challenge, I wanted to play around with some Vanilla JS and built the functionality of the shopping cart. I used the [observer design pattern](https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)){:target="_blank"}.

![observer-image](https://upload.wikimedia.org/wikipedia/commons/9/97/EstructuraPatronObservador.png)

There's no way to declare interfaces in JavaScript, so it's assumed that every observer has a notify method.

[Here's](https://github.com/Edkiri/restaurnat/blob/main/js/cart.js){:target="_blank"} the implementation of the observer pattern for the shopping cart.

I used session storage to save the list of items added to cart.