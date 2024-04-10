document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to be fully loaded before executing code

    // Find the button element with the id 'recommend_btn'
    var recommendBtn = document.getElementById("recommend_btn");

    // Add an event listener for the 'click' event
    recommendBtn.addEventListener("click", function() {
        // When the button is clicked, invoke the addRecommendation() function
        addRecommendation();
    });

    // Function to add a new recommendation
    function addRecommendation() {
        // Get the message of the new recommendation
        let recommendation = document.getElementById("new_recommendation");
        // If the user has left a recommendation, display a pop-up
        if (recommendation.value != null && recommendation.value.trim() != "") {
            console.log("New recommendation added");
            // Call showPopup here
            showPopup(true);

            // Create a new 'recommendation' element and set its value to the user's message
            var element = document.createElement("div");
            element.setAttribute("class", "recommendation");
            element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
            // Add this element to the end of the list of recommendations
            document.getElementById("all_recommendations").appendChild(element);

            // Reset the value of the textarea
            recommendation.value = "";
        }
    }

    // Function to show or hide the popup
    function showPopup(bool) {
        if (bool) {
            document.getElementById('popup').style.visibility = 'visible';
        } else {
            document.getElementById('popup').style.visibility = 'hidden';
        }
    }
});


