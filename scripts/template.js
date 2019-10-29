function exampleBlock(data, idx) {
  if (data && idx === 0) {
    return data.reduce((acc, i) => {
      return (acc += `
\`\`\`${i.type}
${i.code}
\`\`\`
`);
    }, '## Examples \n\n');
  }

  return '';
}

function templateBlock(data, idx) {
  return `
${data.description}

\`\`\`scss
${data.context.name}: ${data.context.value};
\`\`\`

${exampleBlock(data.example, idx)}
`;
}

module.exports = function(data) {
  return data.reduce((acc, i, idx) => {
    return (acc += templateBlock(i, idx));
  }, '');
};
