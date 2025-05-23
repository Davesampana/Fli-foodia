// Toggle dropdown menus on click
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector("a");
      const menu = dropdown.querySelector(".dropdown-menu");
  
      // Show/hide menu when clicked
      trigger.addEventListener("click", function (e) {
        e.preventDefault(); // prevent default link behavior
  
        // Close other open dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((otherMenu) => {
          if (otherMenu !== menu) {
            otherMenu.style.display = "none";
          }
        });
  
        // Toggle current menu
        if (menu.style.display === "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      });
    });
  
    // Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          dropdown.querySelector(".dropdown-menu").style.display = "none";
        }
      });
    });
  });
  