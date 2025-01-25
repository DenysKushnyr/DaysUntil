#!node
import { printHelp, printError } from "./helpers";

const argv = process.argv.slice(2);

if (argv.length === 0) {
    printHelp();
    process.exit();
}

const desiredDate = new Date(argv[0]);

if (isNaN(+desiredDate)) {
    printError("Invalid date format.\n")
    printHelp();
    process.exit();
}

const now = new Date();
const diff = (desiredDate.getTime() - now.getTime());

if (diff <= 0) {
    console.log(`\n\x1b[1;44m!!! The date has come !!!\x1b[0m\n`);

    process.exit();
}

const days = Math.trunc(diff / 1000 / 60 / 60 / 24);
const weeks = Math.trunc(days / 7);
const hours = hoursUntilMidnight();

console.log(`\x1b[0;32m${days} days ${hours} hours\x1b[0m`);
// console.log(`${weeks} weeks ${(days % 7)} days`);


function hoursUntilMidnight() {
    var midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0);
    return Math.trunc(( midnight.getTime() - new Date().getTime() ) / 1000 / 60 / 60);
}