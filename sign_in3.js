// Add default user to localStorage if not already added
let users = JSON.parse(localStorage.getItem("users")) || [];
if (!users.find(user => user.email === "roshni@gmail.com")) {
    users.push({ name: "Roshni", email: "roshni@gmail.com", password: "roshni" });
    localStorage.setItem("users", JSON.stringify(users));
}


document.getElementById("signInForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const matchedUser = users.find(user => user.email === email);
  
    if (!matchedUser) {
      alert("Email not found. Please sign up first.");
      return;
    }
  
    if (matchedUser.password === password) {
      alert("Signed in successfully!\nWelcome to the Recipe Book 🍽️");
      window.location.href = "home3.html";
    } else {
      alert("Incorrect password.");
    }
  });  

document.getElementById("signUpForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const cpassword = document.getElementById("confirm").value.trim();
  
    if (!name || !email || !password || !cpassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== cpassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Get users from localStorage or initialize empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if email is already used
    let isUsed = users.some(user => user.email === email);
    if (isUsed) {
      alert("This email is already registered.");
      return;
    }
  
    // Add new user to array
    users.push({ name, email, password });
  
    // Store back to localStorage
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Account created successfully!");
    window.location.href = "sign_in3.html";
  });
