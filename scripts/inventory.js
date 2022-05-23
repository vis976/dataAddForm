

let data = JSON.parse(localStorage.getItem("products"))

// console.log(data);

data.map(function(ele,index){

let div = document.createElement("div") 
div.setAttribute("class", "div")

let img = document.createElement("img")
img.src = ele.image;
img.setAttribute("class", "image")

let type = document.createElement("p")
type.innerText = ele.type;

let desc = document.createElement("p")
desc.innerText = ele.desc;

let price = document.createElement("p")
price.innerText = ele.price;

let btn = document.createElement("button");
btn.innerText = "Remove Product"
btn.setAttribute("id","remove_product")
btn.addEventListener("click", function(){
    remove(ele, index);
});

div.append(img,type,desc,price,btn)

document.querySelector("#all_products").append(div);
});

function remove(ele, index) {
    data.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(data));
    window.location.reload();
}