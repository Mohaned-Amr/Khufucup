const btn = document.getElementById("toTop");

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  const menuIcon = document.querySelector(".menu-icon");
  const navBar = document.querySelector(".nav-bar");

  // لما ادوس على الايقونة
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // تمنع ان الكليك يوصل للوثيقة
  navBar.classList.toggle("active");
});

// لما ادوس في اي مكان في الصفحة
document.addEventListener("click", (e) => {
  // لو القائمة مفتوحة ودست في اي حتة مش على القائمة أو الايقونة
  if (navBar.classList.contains("active") && !navBar.contains(e.target) && e.target !== menuIcon) {
    navBar.classList.remove("active");
  }
});

document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});


