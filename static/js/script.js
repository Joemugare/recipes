document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to all recipe links
    var recipeLinks = document.querySelectorAll('a.recipe-link');
    recipeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();
            // Display an alert with the recipe title
            alert("You clicked on: " + link.innerText);
        });
    });
});
