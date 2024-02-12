let tickets = [];

function buyTicket() {
    let movie = document.getElementById("movie").value;
    let quantity = document.getElementById("quantity").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let isValid = true;
    let validationMessage = "";

    if (!movie) {
        isValid = false;
        validationMessage += "Velg en film.\n";
    }
    if (!quantity) {
        isValid = false;
        validationMessage += "Angi antall billetter.\n";
    }
    if (!firstname) {
        isValid = false;
        validationMessage += "Skriv inn fornavn.\n";
    }
    if (!lastname) {
        isValid = false;
        validationMessage += "Skriv inn etternavn.\n";
    }
    if (!phone || !phone.match(/^\d{8}$/)) {
        isValid = false;
        validationMessage += "Skriv inn et gyldig telefonnummer.\n";
    }
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        isValid = false;
        validationMessage += "Skriv inn en gyldig e-postadresse.\n";
    }

    if (isValid) {
        let ticket = {
            movie: movie,
            quantity: quantity,
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email
        };

        tickets.push(ticket);
        displayTickets();
        clearFields();
        clearValidationMessage();
    } else {
        displayValidationMessage(validationMessage);
    }
}

function displayTickets() {
    let ticketList = document.getElementById("ticketList");
    ticketList.innerHTML = "";

    tickets.forEach(ticket => {
        let li = document.createElement("li");
        li.textContent = `${ticket.quantity} billetter til ${ticket.movie} - ${ticket.firstname} ${ticket.lastname}, ${ticket.phone}, ${ticket.email}`;
        ticketList.appendChild(li);
    });
}

function deleteAllTickets() {
    tickets = [];
    displayTickets();
}

function clearFields() {
    document.getElementById("movie").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

function displayValidationMessage(message) {
    alert(message);
}

function clearValidationMessage() {
}