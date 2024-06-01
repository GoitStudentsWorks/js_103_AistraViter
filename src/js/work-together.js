document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('workTogetherForm');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalButton = document.getElementById('closeModal');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('userEmail').value;
            const message = document.getElementById('userMessage').value;

            if (!email || !message) {
                alert('Please fill in both the email and message fields.');
                return;
            }

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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);

                if (data.success) {
                    openModal();
                    form.reset();
                } else {
                    alert('There was an error submitting your request. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your request. Please try again.');
            });
        });
    }

    function openModal() {
        if (modalBackdrop) {
            modalBackdrop.classList.add('is-open');
        }
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            if (modalBackdrop) {
                modalBackdrop.classList.remove('is-open');
            }
        });
    }
});
