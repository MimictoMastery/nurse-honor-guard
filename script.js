
document.documentElement.classList.add("js");


var lampButton = document.getElementById("lamp-button");
var lamp = document.getElementById("lamp");
var hero = document.getElementById("hero");
var heroTitle = document.getElementById("hero-title");
var heroText = document.getElementById("hero-text");

lampButton.addEventListener("click", function () {

  lamp.classList.toggle("lit");
  hero.classList.toggle("lit");

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




var menuToggle = document.getElementById("menu-toggle");
var nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
  var isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

nav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", false);
  }
});



var form = document.getElementById("notify-form");
var message = document.getElementById("form-message");

var nurseName = document.getElementById("nurse-name");
var yourName = document.getElementById("your-name");
var contact = document.getElementById("contact");

form.addEventListener("submit", function (event) {

  
  event.preventDefault();

  var allFilled = true;
  var required = [nurseName, yourName, contact];

  for (var i = 0; i < required.length; i++) {
    var box = required[i];

   
    if (box.value.trim() === "") {
      box.classList.add("error-border");
      allFilled = false;
    } else {
      box.classList.remove("error-border");
    }
  }

  if (allFilled === false) {
    message.textContent = "Please fill in the nurse's name, your name, and your phone or email.";
    return;
  }

 
  message.textContent = "Thank you. Online requests are not connected yet, so please also message us in our Facebook group.";
});



var tributes = [
  {
    name: "Example Nurse One",
    years: "1950 to 2024",
    story: "Write a few sentences here about her career and the people she cared for."
  },
  {
    name: "Example Nurse Two",
    years: "1962 to 2025",
    story: "Write a few sentences here about her career and the people she cared for."
  }
];

var tributeList = document.getElementById("tribute-list");

for (var t = 0; t < tributes.length; t++) {
  var nurse = tributes[t];

  var item = document.createElement("details");
  var title = document.createElement("summary");
  var years = document.createElement("p");
  var story = document.createElement("p");

  title.textContent = nurse.name;
  years.textContent = nurse.years;
  years.className = "years";
  story.textContent = nurse.story;

  item.appendChild(title);
  item.appendChild(years);
  item.appendChild(story);
  tributeList.appendChild(item);
}




var fadeBoxes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        watcher.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeBoxes.forEach(function (box) { watcher.observe(box); });
} else {

  fadeBoxes.forEach(function (box) { box.classList.add("visible"); });
}