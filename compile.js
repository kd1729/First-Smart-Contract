const solc = require("solc");
const path = require("path");
const fs = require("fs");

const inboxPath = path.join(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

var input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output.contracts['Inbox.sol']['Inbox']);

module.exports = output.contracts["Inbox.sol"].Inbox;
