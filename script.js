// AOS.init()
AOS.init({
    delay: 200,
    duration: 1500,
    once: false,
    mirror: false,
});

//  Navigation Script

function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
}
