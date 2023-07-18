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


// Logout route
app.get('/logout', (req, res) => {
    // Clear the session data
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      // Redirect the user back to the home page after logout
      res.redirect('/');
    });
  });
  

  // ...

// POST route to handle blog
app.post('/submit', (req, res) => {
    // Get the form data from the request body
    const { subject, description } = req.body;
  
    // Here, you can save the form data to a database or perform any other desired actions
  
    // For now, let's assume we have an array to store the journal entries
    const journalEntry = {
      subject,
      description,
      // Add any other relevant data or transformations as needed
    };
  
    // Assuming you have a 'journalEntries' array to store the entries
    journalEntries.push(journalEntry);
  
    // Redirect the user back to the home page after submission
    res.redirect('/');
  });
  
  // ...
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
