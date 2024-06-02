'use server';

const fs = require('fs');

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
