export default function iterateThroughObject(reportWithIterator) {
  let namesFormat = '';
  const stopElement = reportWithIterator[reportWithIterator.length - 1];
  for (const name of reportWithIterator) {
    if (stopElement === name) {
      namesFormat += `${name}`;
    } else {
      namesFormat += `${name} | `;
    }
  }
  console.log('stop element = ', stopElement);
  return namesFormat;
}
