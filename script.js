  // COOKIE FUNCTIONS
  function setCookie(name, value, maxAge) {
      let cookieStr = name + "=" + value + ";";
      if (maxAge >-1) {
         cookieStr += "max-age=" + maxAge + ";";
      }
      document.cookie = cookieStr;
  }
function getCookie(name) {
    let nameeq = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameeq) == 0) return c.substring(nameeq.length, c.length);
    }
    return "";
}
  
  
  function deleteCookie(name) {
    setCookie(name, "", -1);
  }

  // MAIN SUBMIT HANDLER
  function handleOrder() {
    document.getElementById("errorMsg").innerHTML = "";

    // TODO: Get values
    let name = document.getElementById("name").value;
    let variant = document.getElementById("variant").value;
    let quantity = document.getElementById("quantity").value;
    let address = document.getElementById("address").value;
    let terms = document.getElementById("terms").checked;
    let pickup = document.getElementById("pickup").value;

    // TODO: Validation
    function validateForm(){
    
      if(name == "" || variant == "" || (address == "" && pickup == "Delivery") || terms == "" || pickup == ""){ 
        document.getElementById("errorMsg").innerHTML = "The following fields cannot be empty:";
        return false;
      }
      if(name == ""){
        document.getElementById("errorMsg").innerHTML += " Name,";
      }
      if(variant == ""){
        document.getElementById("errorMsg").innerHTML += " Variant,";
      }
      if(quantity == ""){
        document.getElementById("errorMsg").innerHTML += " Quantity,";
      }
      if(address == "" && pickup == "Delivery"){
        document.getElementById("errorMsg").innerHTML += " Address,";
      }
      if(terms == ""){
        document.getElementById("errorMsg").innerHTML += " Terms,";
      }
      if(pickup == null){
        document.getElementById("errorMsg").innerHTML += " Pickup,";
      }
      if(quantity <= 0){
        document.getElementById("errorMsg").innerHTML += " Quantity cannot be 0";
      }
      return true;
  }

    // If invalid: Display appropriate error message
    // return false;
    // Otherwise: Store data (cookies + localStorage)
    if (name == "" || variant == "" || quantity == "" || (address == "" && pickup == "Delivery") || terms == "" || pickup == ""){
      return false;
    }
    else{
      setCookie("name", name, 86400);
      localStorage.setItem("product", variant);
        localStorage.setItem("quantity", quantity);
        localStorage.setItem("pickup", pickup);
        localStorage.setItem("address", address);

        // Requirement: Redirect to summary.html
        window.location.href = "summary.html";
        return false;
    
  }
  }
    
 

  // LOAD PREVIOUS ORDER
  function loadPreviousOrder() {

    // TODO: Retrieve stored data
    
        let product = localStorage.getItem("product");
        let quantity = localStorage.getItem("quantity");
        let pickup = localStorage.getItem("pickup");
        let address = localStorage.getItem("address");

  


    // TODO: If no data: Display error message "No previous order data"
    if(getCookie("name") == ""&& localStorage.getItem("product") == null && localStorage.getItem("quantity") == null && localStorage.getItem("pickup") == null && localStorage.getItem("address") == null){
      document.getElementById("errorMsg").innerHTML = "No previous order data";
    } 
    // TODO: Otherwise: Populate fields
    else{
      document.getElementById("variant").value = localStorage.getItem("product");
      document.getElementById("quantity").value = localStorage.getItem("quantity");
      document.getElementById("pickup").value = localStorage.getItem("pickup");
      document.getElementById("address").value = localStorage.getItem("address");
      document.getElementById("terms").checked = true;
      document.getElementById("name").value = getCookie("name");
    }


  }
