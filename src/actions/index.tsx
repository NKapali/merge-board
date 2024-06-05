'use server';

const fs = require('fs');

/*
 * Function will edit the json file in 'src/data/assignment.json'.
 * Save function is not ideal as react creates dublicate data, so the data will be converted into an array.
 * Upon save the data change will break funcionality so do make sure to undo save and return the data to original state.
 */
export async function editData(data: object) {
  let jsonData: string = fs.readFileSync('src/data/assignment.json');
  let parsedData = Array.from(JSON.parse(jsonData));
  parsedData.push(data);

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
