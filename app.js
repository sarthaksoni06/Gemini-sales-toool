// app.js
import { loginUser, logoutUser, checkAuth } from './firebase-auth.js';

// Init Authentication State Listener
document.addEventListener("DOMContentLoaded", () => {
    checkAuth();
    
    // Attach Event Listeners
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    
    if(loginBtn) {
        loginBtn.addEventListener("click", loginUser);
    }
    
    if(logoutBtn) {
        logoutBtn.addEventListener("click", logoutUser);
    }

    // Optional: Add simple JS Parallax for elements that need extra movement
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroText = document.querySelector('.hero-content');
        if(heroText) {
            heroText.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
});
