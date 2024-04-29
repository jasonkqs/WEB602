const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://" +
    process.env.usernameMongoDB +
    ":" +
    process.env.password +
    "@qkong.bqyc1ad.mongodb.net/e-library?retryWrites=true&w=majority&appName=qkong"
);

const librarySchema = new mongoose.Schema({
  bookName: String,
  issued: Number,
  available: Number,
  total: Number,
  cover: String,
  rating: Number,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  issuedBooks: [
    {
      bookName: String,
    },
  ],
  numberOfIssuedBooks: Number,
  signedIn: Boolean,
});

const User = new mongoose.model("User", userSchema);

const Library = new mongoose.model("Library", librarySchema);

const issued = Math.floor(100 * Math.random());
const total = 100;
const available = total - issued;

//create new book in the library
const newBook = new Library({
  bookName: "Westcliff",
  issued: issued,
  available: available,
  total: total,
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtjj2SYoXFKTWUa0YeHMgnCp8y1bpS4v0ew&usqp=CAU",
  rating: Math.floor(5 * Math.random()),
});
newBook.save();
console.log("newbook saved");

module.exports = { Library, User };
