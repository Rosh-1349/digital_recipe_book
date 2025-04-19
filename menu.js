// Data for recipes (example data for demonstration)
const recipes = [
    { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with egg and cheese', kitchen: ['italian','veg','western'], img: 'spaghetti.jpg', link: 'spaghetti.html' },
    { name: 'Veggie Tacos', description: 'Traditional Mexican dish with tortillas and various fillings', kitchen: ['mexican','veg','western'], img: 'tacos.jpg', link: 'veg_taco.html' },
    { name: 'Chicken Tacos', description: 'Traditional Mexican dish with tortillas and various fillings', kitchen: ['mexican','non_veg'], img: 'chicken_taco.jpg', link: 'chicken_tacos.html' },
    { name: 'Butter Chicken', description: 'Popular Indian dish with creamy tomato sauce', kitchen: ['indian','non_veg'], img: 'butter_chicken.jpg', link: 'butter_chicken.html' },
    { name: 'Pizza Margherita', description: 'Traditional Italian pizza with fresh mozzarella', kitchen: ['italian','veg','western'], img: 'pizza.jpg', link: 'margharita_pizza.html' },
    { name: 'Burritos', description: 'Mexican dish with beans, meat, and rice wrapped in a tortilla', kitchen: ['mexican','non_veg'], img: 'burritos.jpg', link: 'chicken_burritos.html' },
    { name: 'Chicken Curry', description: 'Delicious and spicy Indian chicken curry', kitchen: ['indian','non_veg'], img: 'chicken_curry.jpg', link: 'chicken_curry.html' },
    { name: 'Spring Roll', description: 'Crispy golden rolls stuffed with a savory mix of vegetables, perfect as a starter or snack.', kitchen: ['chinese','veg'], img: 'spring_rolls.jpg', link: 'spring_roll.html' },
    { name: 'Chow Mein', description: 'A delicious stir-fried noodle dish tossed with colorful veggies and classic Asian flavors.', kitchen: ['chinese','veg'], img: 'chow mein.jpg', link: 'chow_mein.html' },
    { name: 'veg burger', description: 'A hearty and flavorful burger packed with a spiced veggie patty, crunchy lettuce, and tangy sauces.', kitchen: ['western','veg'], img: 'veg_burger.jpg', link: 'veg_burger.html' },
    { name: 'Kadhai Paneer', description: 'A spicy and aromatic paneer dish cooked with capsicum and traditional Indian spices in a kadhai.', kitchen: ['indian','veg'], img: 'kadhai_paneer.jpg', link: 'kadhai_paneer.html' },
    { name: 'Dal Makhani', description: 'A rich and creamy lentil dish slow-cooked with butter and spices — a Punjabi favorite!', kitchen: ['indian','veg'], img: 'dal_makhani.jpg', link: 'dal_makhani.html' },
    { name: 'Naan', description: "Soft and fluffy Indian flatbread that's the perfect companion for curries and dals.", kitchen: ['indian','veg'], img: 'naan.jpg', link: 'naan.html' },
    { name: 'Pav bhaji', description: 'A spicy mashed vegetable curry served with buttery toasted buns — Mumbai’s favorite street food!', kitchen: ['indian','veg'], img: 'pav_bhaji.jpg', link: 'pav_bhaji.html' },
    { name: 'Spicy Pad thai', description: 'A bold, stir-fried Thai noodle dish packed with heat, peanuts, and tangy tamarind.', kitchen: ['thai','veg'], img: 'pad_thai.jpg', link: 'pad_thai.html' },
    { name: 'decadent chocolate cake', description: 'Rich, moist layers of chocolate indulgence with a velvety frosting.', kitchen: ['western','veg'], img: 'decadent_chocolate_cake.jpg', link: 'choc_cake.html' },
    { name: 'Tropical Thai Coconut-Tapioca Pudding', description: 'Creamy coconut dessert with chewy tapioca pearls and tropical flair.', kitchen: ['thai','veg'], img: 'TropicalThaiCoconut-TapiocaPudding-TheSpruce.webp', link: 'pudding.html' },
    { name: 'Easy Gluten-Free Vegan Thai Fried Rice Noodles', description: 'A simple, plant-based twist on Thai noodles bursting with umami.', kitchen: ['thai','veg'], img: 'EasyGluten-FreeVeganThaiFriedRiceNoodles-TheSpruce_DianaChistruga.webp', link: 'rice_noodle.html' },
    { name: 'classic lasagna', description: 'Hearty layers of pasta, savory meat sauce, and creamy béchamel baked to perfection.', kitchen: ['mexican','veg'], img: 'lasagna.jpg', link: 'lasagna.html' },
];

// Function to filter recipes based on selected kitchen
// Search Function
function searchRecipes() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchValue)
    );
    displayRecipes(filteredRecipes);
}

// Category Filter Function
function filterCategory(category) {
    document.getElementById('searchInput').value = ''; // Clear search bar when category clicked
    const filteredRecipes = category === 'all'
        ? recipes
        : recipes.filter(recipe => recipe.kitchen.includes(category));
    displayRecipes(filteredRecipes);
}


// Function to display recipes
function displayRecipes(recipesList) {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = ''; // Clear previous content
    recipesList.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <a href="${recipe.link}" class="button">View Recipe</a>
        `;
        container.appendChild(card);
    });
}

// Initialize page with all recipes
displayRecipes(recipes);
function showAddRecipeForm() {
    document.getElementById("addRecipeModal").style.display = "block";
}

function closeAddRecipeForm() {
    document.getElementById("addRecipeModal").style.display = "none";
}

function addNewRecipe() {
    const name = document.getElementById("newRecipeName").value.trim();
    const image = document.getElementById("newRecipeImage").value.trim();
    const description = document.getElementById("newRecipeDescription").value.trim();
    const instructions = document.getElementById("newRecipeInstructions").value.trim();
    const category = document.getElementById("newRecipeCategory").value;
  
    if (!name || !image || !description || !instructions || !category) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check if image loads
    const img = new Image();
    img.onload = () => {
      const fileName = `${name.toLowerCase().replace(/\s+/g, "_")}.html`;
  
      const newRecipe = {
        name,
        description,
        kitchen: [category],
        img: image,
        link: fileName
      };
  
      recipes.push(newRecipe);
      displayRecipes(recipes);
  
      closeAddRecipeForm();
      alert("Recipe added to the menu!");
    };
  
    img.onerror = () => {
      alert("Image URL is invalid or unreachable. Please use a correct URL.");
    };
  
    img.src = image;
  }
  


// Auto-filter based on URL query param (e.g., ?category=chinese)
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const categoryFromURL = params.get('category');
    if (categoryFromURL) {
        filterCategory(categoryFromURL.toLowerCase());
    } else {
        displayRecipes(recipes); // Default to all
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("addRecipeModal");
    const openBtn = document.getElementById("addRecipeBtn");
    const closeBtn = document.getElementById("closeModal");
    const submitBtn = document.getElementById("submitRecipeBtn");

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    submitBtn.addEventListener("click", () => {
        const name = document.getElementById("newRecipeName").value.trim();
        const img = document.getElementById("newRecipeImage").value.trim();
        const desc = document.getElementById("newRecipeDesc").value.trim();
        const link = document.getElementById("newRecipeLink").value.trim();

        if (!name || !img || !desc || !link) {
            alert("Please fill out all fields.");
            return;
        }

        const newRecipe = {
            name,
            img,
            description: desc,
            link,
            kitchen: ['custom']
        };

        recipes.push(newRecipe);
        displayRecipes(recipes);
        modal.style.display = "none";

        // Clear fields
        document.getElementById("newRecipeName").value = "";
        document.getElementById("newRecipeImage").value = "";
        document.getElementById("newRecipeDesc").value = "";
        document.getElementById("newRecipeLink").value = "";
    });
});
