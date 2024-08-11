const fs = require("fs");

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log("File content:", data);
        resolve(data);
      }
    });
  });
}

readFile("a.txt").catch((error) => {
  console.error("Error reading file:", error);
});
