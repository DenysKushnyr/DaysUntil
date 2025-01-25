const noColor = "\x1b[0m";
const redColor = "\x1b[0;31m"
const dateFormat = "YYYY-MM-DD";

function printHelp() {
    console.log(`USAGE: \t./daysUntil ${dateFormat}`);
}

function printError(msg: string): void {
    console.log(`${redColor}ERROR:${noColor} ${msg}`)
}

export {dateFormat, printHelp, printError}