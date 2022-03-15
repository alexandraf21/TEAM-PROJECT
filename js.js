window.alert("Hello!  We'd love to get your feedback! ");


  
Window
  function myFunction() {
    let text;
    let person = prompt("Thank you, where did you hear about us?");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }

 