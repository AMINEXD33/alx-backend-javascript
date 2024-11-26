const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("start", () => {
  process.stdout.write("Welcome to Holberton School, what is your name?\n");
  process.stdin.on("data", function (data) {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on("exit", () => {
    process.stdout.write("This important software is now closing\n");
  });
});
myEmitter.emit("start");
