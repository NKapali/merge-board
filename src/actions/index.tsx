'use server';

const fs = require('fs');

export async function jsonData() {
  let book = {
    title: 'The boggi',
    author: 'George Orwell',
    read: true,
  };

  let data = fs.readFileSync('src/data/books.json');
  let books = JSON.parse(data);
  books.push(book);

  fs.writeFile(
    'src/data/books.json',
    JSON.stringify(books),
    function (err: Error) {
      if (!err) {
        console.log('Success!');
      } else {
        console.log(err);
      }
    }
  );
}

export async function editData(data: object) {
  let jsonData: string = fs.readFileSync('src/data/assignment.json');
  let parsedData = Array.from(JSON.parse(jsonData));
  parsedData.push(data);

  // console.log('Json data:', jsonData);

  fs.writeFile(
    'src/data/assignment.json',
    JSON.stringify(parsedData),
    function (err: Error) {
      if (!err) {
        console.log('Success!');
      } else {
        console.log(err);
      }
    }
  );
}
