const http = require('http');
const fs = require('fs');

const content = "/public";
const allowedFiles = findFilesInPublicForSecurity(content);
const port = 8080;

app = http.createServer(function (req, res) {
  let url = req.url;
  if (url.includes(`?fbclid`)) {
    let idontwantfacebook = url.indexOf(`?fbclid`);
    console.log(`linked in from facebook: ${url}`); exi
    url = url.substring(0, idontwantfacebook);
  }
  console.log(`checking URL:${url}, allowed: ${allowedFiles.includes(url)}`);
  if (!allowedFiles.includes(url)) {
    res.writeHead(404);
    res.end(JSON.stringify({ notfound: url }));
    return;
  }

  if (url === "/" || url === "") {
    url = "/index.html"
  }

  fs.readFile(__dirname + content + url, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    const contentType = getContentTypeString(url);
    res.setHeader("Content-Type", contentType);
    res.writeHead(200);
    res.end(data);
  });
});


app.listen(port, () => { console.log(`Server listening on port ${port}`) });

module.exports = {
  app,
}

function getContentTypeString(fileName) {
  if (!fileName || fileName.split(`.`).length < 1) {
    return `text/html`;
  }
  const ext = fileName.split(`.`)[1];
  /// TODO make complete - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  let type;
  switch (ext) {
    case `js`:
      type = `text/javascript`;
      break;
    case `json`:
      type = `application/json`;
      break;
    case `ico`:
      type = `image/vnd.microsoft.icon`;
      break
    default:
      type = `text/html`;
  }
  return type;
}

function findFilesInPublicForSecurity(contentFolder) {
  const dirs = fs.readdirSync(__dirname + contentFolder, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let allowedFiles = ["/", "", "favicon.ico"];
  dirs.forEach((dir) => {
    const x = fs.readdirSync(__dirname + `${contentFolder}/${dir}`, { withFileTypes: true })
      .filter(dirent => !dirent.isDirectory())
      .map(dirent => `/${dir}/${dirent.name}`);
    allowedFiles = allowedFiles.concat(x);
  });

  const files = fs.readdirSync(__dirname + contentFolder, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => `/${dirent.name}`);
  allowedFiles = allowedFiles.concat(files);

  console.log(allowedFiles);
  return allowedFiles;
}
