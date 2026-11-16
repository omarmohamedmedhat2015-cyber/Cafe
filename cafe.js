let cart = JSON.parse(localStorage.getItem("cart") || [])
let images = {
    "Latte": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    "cuppachino": "https://tse2.mm.bing.net/th/id/OIP.Pe-S01F7qQmyT8Md6QyK_wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "americano": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    "mocha": "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
    "flat white": "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    "irish coffee": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "turkish coffee": "https://images.unsplash.com/photo-1459755486867-b55449bb39ff"
}
function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    if (item) {
        item.qty++ ;
    } else {
        cart.push({ name, price, qty: 1, image: images[name] });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}



function rendercart() {
    let container = document.getelElementById("cart")
    let total = 0
    container.innerHTML = "";
    cart.forEach((item, i) => {
        let t = item.price * item.qty;
        total += t;
        container.innerHTML += `
<div class=menu-item> 
img-src="${item.image}" 
<span class="name">$ {item.name} x${item.qty}</span>
span class="dots"</span>
<span class="name">${t}</span>
<button onclick="remoceItem"(${i})>x</button>
div
`;
    });
    document.getElementById("total").innerText = "Total: " + total;
}

// تشغيل الدالة تلقائياً عند فتح صفحة السلة
if (document.getElementById("cart")) {
  rendercart();
}
function removeitem(i){
    cart.splice(i,1)
    localStorage.setitem("cart",
        JSON.srtingify(cart)); renderCart(); 
}
document.addEventListener("DOMLContantLoaded",() => {
    if(document.getElementById("cart"))
    {rendercart();}
})