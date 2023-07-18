// journal.js

document.getElementById('dreamForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // Assuming the form submission is successful, you can perform any actions here
        // For example, show a success message or update the page content
        console.log('Journal entry saved successfully');
        window.location.href = '/'; // Redirect to the home page after successful submission
      } else {
        console.error('Journal entry submission failed');
        // Handle error scenarios, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  });
  