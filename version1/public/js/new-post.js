const newPostFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const post_title = document.querySelector(`#post-name`).value.trim();
    const post_content = document.querySelector(`#post-description`).value.trim();
    const post_location = document.querySelector(`#post-location`).value.trim();
    const animal_type = document.querySelector(`#animalType`).value.trim();
    


    console.log('Pic URL!!!',picurl)
    

    // Send the post to the server
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ post_title, post_location, post_content, animal_type, picurl}),
        headers: { 'Content-Type': 'application/json' },
      });
  
    // Replaces dashboard if post succeeds
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to post.');
    }
}

document.querySelector('.create-post-form').addEventListener('submit', newPostFormHandler);