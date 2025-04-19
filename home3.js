// FADE-IN ANIMATION
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// RECIPE SEARCH + AUTOSUGGEST + REDIRECT
// const recipeMap = {
//   "classic lasagna": "lasagna.html",
//   "spicy pad thai": "pad_thai.html",
//   "decadent chocolate cake": "choc_cake.html",
//   "spring roll": "spring_roll.html",
//   "chow mein": "chow_mein.html",
//   "veg burger": "veg_burger.html",
//   "kadhai paneer": "kadhai_paneer.html",
//   "dal makhani": "dal_makhani.html",
//   "naan": "naan.html",
//   "pav bhaji": "pav_bhaji.html",
//   "tropical thai coconut-tapioca pudding": "pudding.html",
//   "easy gluten-free vegan thai fried rice noodles": "rice_noodle.html",
//   "butter chicken": "butter_chicken.html",
//   "pizza margherita": "margharita_pizza.html",
//   "burritos": "chicken_burritos.html",
//   "chicken curry": "chicken_curry.html",
//   "veggie tacos": "veg_taco.html",
//   "chicken tacos": "chicken_tacos.html",
//   "spaghetti carbonara": "spaghetti.html"
// };

const input = document.getElementById("heroSearchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";

  if (query === "") return;

  const matches = Object.keys(recipeMap)
      .filter(name => name.includes(query))
      .slice(0, 7);

  matches.forEach(match => {
      const div = document.createElement("div");
      div.textContent = match;
      div.className = "suggestion-item";
      div.onclick = () => {
          input.value = match;
          suggestionsBox.innerHTML = "";
          window.location.href = recipeMap[match];
      };
      suggestionsBox.appendChild(div);
  });
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
      e.preventDefault();
      const query = input.value.toLowerCase().trim();
      if (recipeMap[query]) {
          window.location.href = recipeMap[query];
      } else {
          alert("No matching recipe found.");
      }
      suggestionsBox.innerHTML = "";
  }
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-bar")) {
      suggestionsBox.innerHTML = "";
  }
});

// ✅ MAKE THIS GLOBAL: SURPRISE ME FUNCTION

// function randomRecipe() {
//   const pages = Object.values(recipeMap);
//   const randomPage = pages[Math.floor(Math.random() * pages.length)];
//   window.location.href = randomPage;
// }

