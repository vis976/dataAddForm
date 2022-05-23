//store the products array in localstorage as "products"

function Product(t,d,p,i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function addData(e) {
  e.preventDefault();

  let form = document.getElementById("products")

  
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

//   console.log(type, desc, price, image);

  let s1 = new Product(type, desc, price, image);
 

  let data = JSON.parse(localStorage.getItem("products")) || [];

  data.push(s1);

  localStorage.setItem("products", JSON.stringify(data));
//   console.log(s1);

  document.getElementById("type").value = null;
  document.getElementById("desc").value = null;
  document.getElementById("price").value = null;
  document.getElementById("image").value = null;

}
