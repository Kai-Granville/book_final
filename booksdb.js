let books = {
    1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {}, "isbn": "1"},
    2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {}, "isbn": "2"},
    3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {}, "isbn": "3"},
    4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {}, "isbn": "4"},
    5: {"author": "Unknown","title": "The Book Of Job", "reviews": {}, "isbn": "5"},
    6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {}, "isbn": "6"},
    7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {}, "isbn": "7"},
    8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {}, "isbn": "8"},
    9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {}, "isbn": "8"},
    10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {}, "isbn": "9"}
  }
  
  let users = []; // Define users array
  
  // Function to check if a username already exists
  const isValid = (username) => {
      // Check if the username exists in the list of users
      return users.some(user => user.username === username);
  };
  
  // Function to delete a book by ISBN
  const deleteBook = (isbn) => {
      if (books[isbn]) {
          delete books[isbn];
          return true; // Book deleted successfully
      } else {
          return false; // Book not found
      }
  };

  
  
  module.exports.books = books;
  module.exports.isValid = isValid;
  module.exports.users = users;
  module.exports.deleteBook = deleteBook;
  