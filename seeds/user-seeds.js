const { User } = require('../models')

const userData = [
  {
    owner_name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    owner_name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    owner_name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345"
  },
  {
    owner_name: "Jordan",
    email: "jordan99@msn.com",
    password: "password12345"
  },
  {
    owner_name: "Blake",
    email: "the_blake@yahoo.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;