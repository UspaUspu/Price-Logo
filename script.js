document.addEventListener("DOMContentLoaded", () => {
    const pricingBoxes = document.querySelectorAll(".pricing-box");

    pricingBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.boxShadow = "0px 8px 20px rgba(255, 255, 255, 0.2)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.boxShadow = "0px 4px 10px rgba(255, 255, 255, 0.1)";
        });
    });
});
