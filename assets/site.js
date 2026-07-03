(function () {
  var toggle = document.getElementById("navToggle");
  var panel = document.getElementById("mobilePanel");
  if (!toggle || !panel) return;

  function closePanel() {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  function openPanel() {
    panel.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  toggle.addEventListener("click", function () {
    var isOpen = panel.classList.contains("is-open");
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });

  panel.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      closePanel();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && panel.classList.contains("is-open")) {
      closePanel();
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      panel.classList.contains("is-open") &&
      !panel.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closePanel();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1080) {
      closePanel();
    }
  });
})();
