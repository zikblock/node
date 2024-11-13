const fs = require('fs');
const readline = require('readline');
const inquirer = require('inquirer');

async function readLines(filename) {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const lines = [];
  for await (const line of rl) lines.push(line.trim());
  return lines;
}
const figlet = require("figlet");
const { ColorTheme } = require("./colors");

const colors = new ColorTheme();

function displayBanner() {
  const banner = figlet.textSync("NODEPAY NETWORK"), {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
  });

  console.log(colors.style(banner, "header"));
  console.log(
  colors.style("===============================================", "border")
  );
  console.log(colors.style("NODEPAY NETWORK BOT",               "link"));
  console.log(colors.style("WELCOME & ENJOY SIR!",              "link"));
  console.log(colors.style("AUTHOR : NOFAN RAMBE",              "link"));
  console.log(
  colors.style("===============================================\n", "border")
  );
}

async function askAccountType() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'accountType',
      message: 'How many accounts would you like to use?',
      choices: ['Single Account', 'Multiple Accounts'],
    },
  ]);

  console.log('');

  return answers.accountType;
}

async function askProxyMode() {
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'useProxy',
      message: 'Would you like to use proxies?',
      default: true,
    },
  ]);

  console.log('');

  return answers.useProxy;
}

module.exports = { readLines, displayHeader, askAccountType, askProxyMode };
