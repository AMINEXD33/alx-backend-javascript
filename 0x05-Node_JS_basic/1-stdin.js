const message = "Welcome to Holberton School, what is your name?\n";
process.stdout.write(message);

process.stdin.on("data", (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
});

process.on("exit", () => {
  process.stdout.write("This important software is now closing\n");
});