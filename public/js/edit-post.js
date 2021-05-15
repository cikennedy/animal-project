async function editFormHandler(event) {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const post_title = document.querySelector('#edit-post-title').value;
    const post_content = document.querySelector('#edit-textarea').value;
    const post_location = document.querySelector(`#edit-post-location`).value.trim();
    const animal_type = document.querySelector(`#edit-animalType`).value.trim();
    console.log('picurl!!!!!!!', picurl)
    console.log(post_title, post_location, post_content, animal_type);
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_title, post_location, post_content, animal_type, picurl
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);