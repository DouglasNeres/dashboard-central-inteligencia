  const eyeOpen = document.querySelector(".bi-eye");
  const eyeClosed = document.querySelector(".bi-eye-slash");
  
  eyeClosed.addEventListener("click", function () {
    toggleVisibility();
    eyeClosed.style.display = "none"; 
    eyeOpen.style.display = "inline"; 
  });

  eyeOpen.addEventListener("click", function () {
    toggleVisibility();
    eyeOpen.style.display = "none"; 
    eyeClosed.style.display = "inline"; 
  });

  function toggleVisibility() {
    const visibleValues = document.querySelectorAll(".visible-value");
    const hiddenValues = document.querySelectorAll(".hidden-value");

    // Alterna a visibilidade de elementos visíveis e ocultos
    visibleValues.forEach(el => el.style.display = el.style.display === "none" ? "block" : "none");
    hiddenValues.forEach(el => el.style.display = el.style.display === "none" ? "block" : "none");
  }
