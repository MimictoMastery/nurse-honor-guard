
// ==========================
// 1. THE LAMP BUTTON
// ==========================
 
// Find the elements on the page by their id
var lampButton = document.getElementById("lamp-button");
var lamp = document.getElementById("lamp");
var heroTitle = document.getElementById("hero-title");
var heroText = document.getElementById("hero-text");
 
// When the button is clicked, run this function
lampButton.addEventListener("click", function () {
 
  // toggle() adds the class "lit" if it's missing, and removes it if it's there
  lamp.classList.toggle("lit");
 
  // Check if the lamp is lit right now, then change the words to match
  if (lamp.classList.contains("lit")) {
    heroTitle.textContent = "Your years of care are remembered.";
    heroText.textContent = "The lamp is lit for every nurse who gave their life to caring for others.";
    lampButton.textContent = "Put out the lamp";
  } else {
    heroTitle.textContent = "A nurse never stops being a nurse.";
    heroText.textContent = "We are volunteer nurses who honor our colleagues at the end of their lives, and stand with the families they leave behind.";
    lampButton.textContent = "Light the lamp";
  }
});
 
 
// ==========================
// 2. THE FORM
// ==========================
 
var form = document.getElementById("notify-form");
var message = document.getElementById("form-message");
 
// The three boxes that must be filled in
var nurseName = document.getElementById("nurse-name");
var yourName = document.getElementById("your-name");
var contact = document.getElementById("contact");
 
form.addEventListener("submit", function (event) {
 
  // Stop the browser from reloading the page
  event.preventDefault();
 
  // Start by assuming everything is filled in
  var allFilled = true;
 
  // Put the required boxes in a list so we can check each one
  var required = [nurseName, yourName, contact];
 
  for (var i = 0; i < required.length; i++) {
    var box = required[i];
 
    // trim() removes spaces, so a box with only spaces counts as empty
    if (box.value.trim() === "") {
      box.classList.add("error-border");
      allFilled = false;
    } else {
      box.classList.remove("error-border");
    }
  }
 
  if (allFilled === false) {
    message.textContent = "Please fill in the nurse's name, your name, and your phone or email.";
    return; // stop here
  }
 
  // Nothing is sent anywhere yet. Later, an Express server can receive this.
  message.textContent = "Thank you. Online requests are not connected yet, so please also message us in our Facebook group.";
});