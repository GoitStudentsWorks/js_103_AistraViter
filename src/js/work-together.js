
document.getElementById('workTogetherForm').addEventListener('submit', function(event) {
    event.preventDefault();
            
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    const data = {
                email: email,
                message: message
            };

    fetch('https://portfolio-js.b.goit.study/api/requests', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    openModal();
                    document.getElementById('workTogetherForm').reset(); 
                } else {
                    alert('There was an error submitting your request. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your request. Please try again.');
            });
        });

function openModal() {
  document.getElementById('modalBackdrop').classList.add('is-open');
}

document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('modalBackdrop').classList.remove('is-open');
});

