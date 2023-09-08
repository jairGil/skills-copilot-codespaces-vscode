// // Create a web server
// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const comments = [];
// const app = http.createServer(function (request, response) {
//   const parsedUrl = url.parse(request.url, true);
//   const pathname = parsedUrl.pathname;
//   const queryData = parsedUrl.query;
//   if (pathname === '/') {
//     fs.readFile('./index.html', function (err, description) {
//       let template = description.toString();
//       let list = templateList();
//       let html = template.replace(/list/g, list);
//       response.writeHead(200);
//       response.end(html);
//     });
//   } else if (pathname === '/create') {
//     let body = '';
//     request.on('data', function (data) {
//       body = body + data;
//     });
//     request.on('end', function () {
//       const post = qs.parse(body);
//       const title = post.title;
//       const description = post.description;
//       fs.writeFile(`./data/${title}`, description, 'utf8', function (err) {
//         response.writeHead(302, { Location: `/?id=${title}` });
//         response.end();
//       });
//     });
//   } else if (pathname === '/update') {
//     fs.readdir('./data', function (err, filelist) {
//       const filteredId = path.parse(queryData.id).base;
//       fs.readFile(`./data/${filteredId}`, 'utf8', function (err, description) {
//         let title = queryData.id;
//         let list = templateList(filelist);
//         let html = templateHTML(title, list, `<form action="/update_process" method="post">
//         <input type="hidden" name="id" value="${title}">
//         <p><input type="text" name="title" placeholder="title" value="${title}"></p>
//         <p>
//             <textarea name="description" placeholder="description">${description}</textarea>
//         </p>
//         <p>
//             <input type="submit">
//         </p>
//         </form>`);
//         response.writeHead(200);
//         response.end(html);
//       });
//     });
//   } else if (pathname === '/update_process') {
//     let body =