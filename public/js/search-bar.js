const searchPostsList = document.getElementById('#searched-posts-list');
const searchBar = document.getElementById('#search-bar');
let animalPosts = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPosts = animalPosts.filter((post) => {
        return (
            post.post_name.toLowerCase().includes(searchString) ||

            post.post_location.toLowerCase().includes(searchString) ||

            post.animal_type.toLowerCase().includes(searchString) ||

            post.post_content.toLowerCase().includes(searchString)
        );
    });
    displayPosts(filteredPosts);
});

const loadPosts = async () => {
    try {
        const res = await fetch('/api/posts');
        let animalPosts = await res.json();
        displayPosts(animalPosts);
        console.log(animalPosts);
    } catch (err) {
        console.error(err);
    }
};

const displayPosts = (posts) => {
    const htmlString = posts.map((post) => {
        return `
        <li class="searched-post">
            <h2>${post.post_name}</h2>
            <p>${post.post_location}</p>
            <p>${post.animal_type}</p>
            <p>${post.post_content}</p>
            <img src="${post.post_photo}></img>
        </li>
            `;
    })
    .join('');
    searchPostsList.innerHTML = htmlString;
};

loadPosts();