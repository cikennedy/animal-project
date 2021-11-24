async function replyFormHandler(event) {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const reply = document.querySelector('#reply-body').value.trim();
    
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    if (reply) {
      // Send the comment to the server
      const response = await fetch('/api/replies', {
        method: 'POST',
        body: JSON.stringify({ reply, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to comment');
      }
    }
  };

document.querySelector('.reply-form').addEventListener('submit', replyFormHandler);