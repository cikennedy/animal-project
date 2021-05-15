const { Post } = require('../models')

const postData = [
  {
    post_title: "Toby",
    post_location: "Police station",
    post_content: "This is a test",
    animal_type: "Dog",
    post_photo: "https://cdn.choosechicago.com/uploads/2020/09/Viceroy-Chicago-Pet-Friendly-Dog-Bed-1536x864.jpg",
    user_id: "1"
  },
  {
    post_title: "Max",
    post_location: "Park",
    post_content: "This is another test",
    animal_type: "Dog",
    post_photo: "https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=KxhG3DVU",
    user_id: "2"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;