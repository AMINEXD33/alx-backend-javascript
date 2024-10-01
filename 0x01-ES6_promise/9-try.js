function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(`${err.name} ${err.message}`);
  }
  queue.push('Guardrail was processed');

  return queue;
}
export default guardrail;
