function bugpage() {
    var checkBox = document.getElementById("bugreport");
    var bugform = document.getElementById("bugform");
    if (checkBox.checked == true){
      bugform.style.display = "block";
    } else {
      bugform.style.display = "none";
    }
  }