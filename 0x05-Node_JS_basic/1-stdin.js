const { exit } = require("process");

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", function (data) {
  process.stdout.write("Your name is: " + data);
  exit();
});
process.on("exit", () => {
  process.stdout.write("This important software is now closing\n");
});
