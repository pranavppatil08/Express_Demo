var express = require('express');
var router = express.Router();

router.get('/search', function (req, res) {
  res.status(200).json({ id: 1, name: 'Harry Potter', author: 'J.K. Rowling' })
});

router.get('/add', function (req, res) {
  res.render('addBooksGet');
});

router.post('/add', function (req, res, next) {
  var bookData= req.body;
  var bookDetails=req.params;
  console.log(bookDetails);
  res.status(200).json({ message: 'Book Saved Sucessfully' });
});

router.get('/find/:id', function (req, res, next) {
  const { id } = req.params;
  console.info(id);
  res.status(200).json({ message: 'Book Found' });
});
module.exports = router;