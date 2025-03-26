/* SCROLL LENIS */
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const lenis = new Lenis({
        smooth: true,
        smoothWheel: true,
        syncTouch: false,
        syncTouchLerp: 0.1,
        duration: 1.9,
        lerp: 0.08
      })
      
      lenis.on('scroll', (e) => {
        // console.log(e)
      })
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
    }, 1000); 
  });
/* END SCROLL LENIS */
/* SPLITTING */
  document.addEventListener('DOMContentLoaded', function() {
	Splitting();
  });
/* SPLITTING */
/* CURRENT YEAR */
  document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll(".current-year").forEach(element => {
          element.textContent = new Date().getFullYear();
      });
  });
/* END CURRENT YEAR */

/* EFFECT BEANS */
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("._nav .nav-item > a");
    const bean = document.querySelector(".bean-i");

    function moveBeanTo(el) {
      const rect = el.getBoundingClientRect();
      const navRect = el.closest("._nav").getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;
      const left = rect.left - navRect.left;
      const top = rect.top - navRect.top;

      bean.style.width = width + "px";
      bean.style.height = height + "px";
      bean.style.left = left + "px";
      bean.style.top = top + "px";
    }

    // Al hacer hover
    navItems.forEach(link => {
      link.addEventListener("mouseenter", () => moveBeanTo(link));
    });

    // Al cargar la página, mover al item activo si hay
    const activeItem = document.querySelector("._nav .current > a");
    if (activeItem) moveBeanTo(activeItem);
  });
/* END EFFECT BEAN */