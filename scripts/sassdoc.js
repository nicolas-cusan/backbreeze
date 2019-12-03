const sassdoc = require('sassdoc');
const fs = require('fs');
const template = require('./template');
const del = require('del');

del.sync('./docs/props/**');

sassdoc.parse('./src', { verbose: true }).then(data => {
  const newData = data.reduce((acc, item, idx) => {
    const name = item.file.name;

    if (name in acc) {
      acc[name].push(item);
    } else {
      acc[name] = [];
      acc[name].push(item);
    }

    return acc;
  }, {});

  console.log(JSON.stringify(newData, null, 2));

  Object.keys(newData).forEach(key => {
    const data = template(newData[key]);
    const fileName = key.replace(/_/, '').replace('.scss', '');

    fs.writeFileSync(`./docs/props/${fileName}.md`, data);
  });
});
