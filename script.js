document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".figure"); // Select all elements with the class "figure"
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target"); // Get the target value from the data attribute
            const count = +counter.innerText.replace('%', ''); // Current value, strip the % if present
            const speed = 200; // Adjust speed of counting here
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20); // Adjust delay as needed for speed
            } else {
                counter.innerText = target; // Set to target value when reached
                // Append '%' for percentage counters
                if (counter.getAttribute("data-is-percent") === "true") {
                    counter.innerText = target + "%";
                }
            }
        };

        counter.setAttribute("data-target", counter.innerText.replace('%', '')); // Store the target number without %
        counter.innerText = '0'; // Start from zero
        updateCount(); // Start counting
    });
});
function toggleMenu() {
    const navbarMobile = document.getElementById("navbarMobile");
    navbarMobile.classList.toggle("active");
}