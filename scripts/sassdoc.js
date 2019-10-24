const sassdoc = require('sassdoc');
const fs = require('fs');

const files = sassdoc.parse('./src', { verbose: true }).then(data => {
  fs.writeFileSync('./dist/parsed-data.json', JSON.stringify(data, null, 2));
});
