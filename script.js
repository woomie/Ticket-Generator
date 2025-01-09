const btn = document.getElementById("Generate-ticket");
if(btn) {
    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        // Save the values before redirecting
        localStorage.setItem('fullName', document.getElementById("full-name").value);
        localStorage.setItem('userEmail', document.getElementById("email").value);
        window.location.href = "ticket.html";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the saved values
    const fullName = localStorage.getItem('fullName');
    const userEmail = localStorage.getItem('userEmail');
    
    // Update the elements
    const congratsDiv = document.getElementById("congrats").querySelector('h1');
    const emailDiv = document.getElementById("email-div").querySelector('p');
    const ticketName =document.getElementById("bottom").querySelector("h3");
    const ticketEmail =document.getElementById("bottom").querySelector("p");
    
    if(congratsDiv && emailDiv) {
        congratsDiv.textContent = `Congrats ${fullName}!<br> Your ticket is ready.`;
        emailDiv.textContent = `We have emailed your ticket to ${userEmail} and will send updates in the run up to the event.`;
        
    }
    ticketName.textContent = `${fullName}`;
    ticketEmail.textContent = `${userEmail}`;

});
