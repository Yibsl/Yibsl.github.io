function submitData() {
    const location = document.getElementById('location').value;
    const weight = document.getElementById('weight').value;
    const size = document.getElementById('size').value;
    const time = document.getElementById('time').value;

    // Send data to the backend (e.g., using fetch)
    fetch('/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            location,
            weight,
            size,
            time,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved successfully:', data);

        // Display confirmation message
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Daten wurden erfolgreich gespeichert!';
        confirmationMessage.style.color = 'green';
        document.getElementById('dataForm').appendChild(confirmationMessage);

        // Clear form fields for additional entries
        document.getElementById('location').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('size').value = '';
        document.getElementById('time').value = '';
    })
    .catch(error => {
        console.error('Error saving data:', error);

        // Display error message
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Fehler beim Speichern der Daten. Bitte versuche es erneut.';
        errorMessage.style.color = 'red';
        document.getElementById('dataForm').appendChild(errorMessage);
    });
}
