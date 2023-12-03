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
        // You can handle the response as needed
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });
}
