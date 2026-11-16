  
// Select form elements
const userForm = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

// Select modal elements
const openModalButton = document.getElementById("open-modal");
const infoModal = document.getElementById("info-modal");

// Select user table
const userTable = document.querySelector("tbody");

// Handle user form submission
if (userForm) {
    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validate input
        if (!name || !email) {
            formMessage.textContent = "Please fill in all required fields.";
            return;
        }

        if (!emailInput.validity.valid) {
            formMessage.textContent = "Please enter a valid email address.";
            emailInput.focus();
            return;
        }

        // Create a new table row
        const newRow = document.createElement("tr");

        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const statusCell = document.createElement("td");

        idCell.textContent = String(userTable.rows.length + 1).padStart(2, "0");
        nameCell.textContent = name;
        emailCell.textContent = email;
        statusCell.textContent = "Active";

        newRow.append(idCell, nameCell, emailCell, statusCell);
        userTable.appendChild(newRow);

        // Display success message
        formMessage.textContent = "User added successfully!";

        // Reset form
        userForm.reset();
    });
}

// Open accessible modal
if (openModalButton && infoModal) {
    openModalButton.addEventListener("click", function () {
        infoModal.showModal();
    });
    }
