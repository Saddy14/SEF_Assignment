
window.onload = function() {
    document.getElementById('general-save-changes-button').addEventListener('click', saveChangesGeneral);
}

function saveChangesGeneral() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get('userID');

    console.log("from client.js");
    console.log(userID);
    const data = { id: userID, name, email, phone };
    console.log(data);
    console.log("saveChangesGeneral");

    fetch('/update-profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.alert('You will be logged out to save the changes.');
        window.location.href = '/logout';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}