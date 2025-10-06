const fs = require("fs");
const { Command } = require("commander"); // Correct import

const program = new Command();

program
  .name("counter")
  .description("CLI to do file-based tasks")
  .version("0.8.0");

program
  .command("count_sentences")
  .description("Count the number of sentences in a file")
  .argument("<file>", "File to count the number of sentences")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err.message);
      } else {
        const sentences = data.split(/[.!?]+/).filter(s => s.trim().length > 0);
        console.log(`There are ${sentences.length} sentences in ${file}`);
      }
    });
  });

program.parse();