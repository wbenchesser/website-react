document.addEventListener("DOMContentLoaded", function () {
  let currentMode = localStorage.getItem("darkMode") || "enabled";

  const applyDarkMode = (enabled) => {
    document.documentElement.classList.toggle("dark-mode", enabled);
    document.body.classList.toggle("dark-mode", enabled);
  };

  applyDarkMode(currentMode === "enabled");

  const toggleSwitch = document.getElementById("darkModeToggle");
  if (toggleSwitch) {
    toggleSwitch.checked = currentMode === "enabled";

    toggleSwitch.addEventListener("change", () => {
      const isChecked = toggleSwitch.checked;
      localStorage.setItem("darkMode", isChecked ? "enabled" : "disabled");
      applyDarkMode(isChecked);
    });
  }
});