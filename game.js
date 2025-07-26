 
    let KooKoos = 0;

    // Check if there's a saved value when the page loads
    window.onload = function () {
        const savedKooKoos = localStorage.getItem("KooKoos");
        if (savedKooKoos !== null) {
            KooKoos = parseInt(savedKooKoos);
            document.getElementById("counter").innerText = "KooKoos: " + KooKoos;
        }
    };

   function clickKooKoo() {
    KooKoos += 1;
    document.getElementById("counter").innerText = "KooKoos: " + KooKoos;
    localStorage.setItem("KooKoos", KooKoos);

    const image = document.getElementById("clickImage");

    // Trigger the pop animation
    image.classList.add("pop");

    // Remove the class after animation so it can re-trigger
    setTimeout(() => {
        image.classList.remove("pop");
    }, 100); // Match this to the pop animation duration
} 