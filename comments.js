// // Create a web server
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());

// // Data
// let comments = [
//   { id: 1, username: 'tj', comment: 'hello world' },
//   { id: 2, username: 'tj', comment: 'hello world' },
//   { id: 3, username: 'tj', comment: 'hello world' },
//   { id: 4, username: 'tj', comment: 'hello world' },
//   { id: 5, username: 'tj', comment: 'hello world' },
//   { id: 6, username: 'tj', comment: 'hello world' },
//   { id: 7, username: 'tj', comment: 'hello world' },
//   { id: 8, username: 'tj', comment: 'hello world' },
//   { id: 9, username: 'tj', comment: 'hello world' },
//   { id: 10, username: 'tj', comment: 'hello world' },
// ];

// // GET /comments
// app.get('/comments', (req, res) => {
//   res.status(200).json(comments);
// });

// // POST /comments
// app.post('/comments', (req, res) => {
//   const comment = req.body;
//   comment.id = comments.length + 1;
//   comments.push(comment);
//   res.status(201).json(comment);
// });

// // PUT /comments/:id
// app.put('/comments/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const comment = req.body;
//   comments = comments.map((comment) => {
//     if (comment.id === id) {
//       return { ...comment, ...req.body };
//     }
//     return comment;
//   });
//   res.status(200).json(comment);
// });

// // DELETE /comments/:id
// app.delete('/comments/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   comments = comments.filter((comment) => comment.id !== id);
//   res.status(204).json({ success: true });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });