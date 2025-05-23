const docBody = document.querySelector("body");

// Dark DropDown Menu For Profile Button
const btn_dark = document.querySelector(".btn-dark .drop-btn"),
  dark_tooltip = document.querySelector(".btn-dark .tooltip"),
  dark_menu_wrapper = document.querySelector(".btn-dark .wrapper"),
  dark_menu_bar = document.querySelector(".btn-dark .menu-bar"),
  dark_setting_drop = document.querySelector(".btn-dark .setting-drop"),
  dark_help_drop = document.querySelector(".btn-dark .help-drop"),
  dark_theme_drop = document.querySelector(".btn-dark .theme-drop"),
  dark_setting_item = document.querySelector(".btn-dark .setting-item"),
  dark_theme_item = document.querySelector(".btn-dark .theme-item"),
  dark_help_item = document.querySelector(".btn-dark .help-item"),
  dark_setting_btn = document.querySelector(".btn-dark .back-setting-btn"),
  dark_theme_btn = document.querySelector(".btn-dark .back-theme-btn"),
  dark_help_btn = document.querySelector(".btn-dark .back-help-btn");

btn_dark.onclick = () => {
  dark_menu_wrapper.classList.toggle("show");
  dark_tooltip.classList.toggle("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }
};

// Settings Button
dark_setting_item.onclick = () => {
  dark_menu_bar.style.marginLeft = "-350px";
  dark_menu_wrapper.style.height = "350px";
  setTimeout(() => {
    dark_setting_drop.style.display = "block";
  }, 100);
};
dark_setting_btn.onclick = () => {
  dark_menu_bar.style.marginLeft = "0px";
  dark_setting_drop.style.display = "none";
  dark_menu_wrapper.style.height = "385px";
};

// Help Button
dark_help_item.onclick = () => {
  dark_menu_bar.style.marginLeft = "-350px";
  dark_menu_wrapper.style.height = "300px";
  setTimeout(() => {
    dark_help_drop.style.display = "block";
  }, 100);
};
dark_help_btn.onclick = () => {
  dark_help_drop.style.display = "none";
  dark_menu_bar.style.marginLeft = "0px";
  dark_menu_wrapper.style.height = "385px";
};

// Theme Button
dark_theme_item.onclick = () => {
  dark_menu_bar.style.marginLeft = "-350px";
  dark_menu_wrapper.style.height = "200px";
  setTimeout(() => {
    dark_theme_drop.style.display = "block";
  }, 100);
};
dark_theme_btn.onclick = () => {
  dark_menu_bar.style.marginLeft = "0px";
  dark_theme_drop.style.display = "none";
  dark_menu_wrapper.style.height = "385px";
};
// -------------------- End DOcument ----------------- >
