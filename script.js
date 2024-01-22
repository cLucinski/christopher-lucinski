function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");  // Toggles presence of the open class
    icon.classList.toggle("open");
}
