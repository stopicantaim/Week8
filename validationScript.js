    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

const inputField = document.getElementById("inputField");
const form = document.getElementById("myForm");

function validateInput(input) {
    // Regular expression pattern for alphanumeric input
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    return alphanumericPattern.test(input);
}

form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    const inputValue = inputField.value;

    if (!validateInput(inputValue)) {
        alert("Input must be alphanumeric");
    } else {
        alert("Input is valid!");
        // Allow the form to submit (though it won't actually submit anything in your case)
    }
});
