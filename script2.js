function getCookie(name) {
    let nameeq = name + "=";
    let c = document.cookie.split(';');
    for (let i = 0; i < c.length; i++) {
      let co = c[i];
      if (co.charAt(0) == ' ') {
        co = co.substring(1);
      }
      if (co.indexOf(nameeq) == 0) {
        return co.substring(nameeq.length, co.length);
      }
      
    }
    return null;
}
        let product = localStorage.getItem("product");
        let quantity = localStorage.getItem("quantity");
        let pickup = localStorage.getItem("pickup");
        let address = localStorage.getItem("address");

  

document.getElementById("Name").innerHTML = getCookie("name");
document.getElementById("Product").innerHTML = localStorage.getItem("product");  
document.getElementById("Quantity").innerHTML = localStorage.getItem("quantity");
document.getElementById("Pickup").innerHTML = localStorage.getItem("pickup"); 

if(product.includes("variant1")){
  document.getElementById("price").innerHTML = Number(quantity) * 93.138;
}
else if(product.includes("variant2")){
  document.getElementById("price").innerHTML = Number(quantity) * 143.138;
}
if(localStorage.getItem("pickup") != "Delivery"){
    document.getElementById("Address").innerHTML= "N/A";
}
else if(localStorage.getItem("pickup") == "Delivery"){
    document.getElementById("Address").innerHTML = localStorage.getItem("address");
}


 
