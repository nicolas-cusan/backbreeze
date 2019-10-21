var ScssCommentParser = require('scss-comment-parser');
const fs = require('fs');

var annotations = {
  _: {
    alias: {
      aliasTest: 'annotationTest'
    }
  },
  annotationTest: function(commentLine) {
    return 'Working';
  }
};

var parser = new ScssCommentParser(annotations);

var scss = fs.readFileSync('./src/props/_align-content.scss', {
  encoding: 'utf8'
});

var comments = parser.parse(scss);

console.log(comments);
