function earnPoints() {
    const userId = 'user123'; // Replace with actual user identification
    const points = 10; // Points to be earned
    fetch('http://localhost:3000/earnPoints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, points }),
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
  }
  
  function getPoints() {
    const userId = 'user123'; // Replace with actual user identification
    fetch(`http://localhost:3000/getPoints/${userId}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('pointsDisplay').innerText = `Points: ${data.points}`;
      })
      .catch(error => console.error('Error:', error));
  }
  