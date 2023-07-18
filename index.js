const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5000;

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is my first blog post content.',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is my second blog post content.',
  },
  // Add more blog posts here
];

// Handlebars middleware
const hbs = exphbs.create({ defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static files
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'My Blog',
    blogPosts: blogPosts,
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Me',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
