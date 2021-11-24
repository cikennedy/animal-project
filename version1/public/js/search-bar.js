const searchPostsList = document.getElementById('searched-posts-list');
const searchBar = document.getElementById('search-bar');
let animalPosts = [];
console.log('search barrrr', searchBar)

const loadPosts = async () => {
    try {
        const res = await fetch('/api/posts');
        animalPosts = await res.json();
        console.log('ANIMAL POSTS!!!!!', animalPosts)
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
            <a class= "view-post-link" href=/post/${post.id}>View Post<a>
            <h2>Name: ${post.post_title}</h2>
            <p>Location: ${post.post_location}</p>
            <p>Type of Animal: ${post.animal_type}</p>
            <p>Description: ${post.post_content}</p>
            <img class='searched-pic' src=${post.post_photo}></img>
        </li>
            `;
    })
    .join('');
    searchPostsList.innerHTML = htmlString;
};

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log('search term!!!!', searchString)
    console.log('animalPosts', animalPosts)

    const filteredPosts = animalPosts.filter((post) => {
        return post.post_title.toLowerCase().includes(searchString) || post.post_location.toLowerCase().includes(searchString) || post.animal_type.toLowerCase().includes(searchString) || post.post_content.toLowerCase().includes(searchString)
    });
    displayPosts(filteredPosts);
});

loadPosts();