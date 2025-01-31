package main

import (
	"fmt"
	"os"
	"time"
	"math"
)

func printHelp() {
	fmt.Println("Usage: ./daysUntil <desired_date>")
	fmt.Println("Please provide a date in a valid format (e.g., '2026-01-01').")
}

func printError(message string) {
	fmt.Println(message)
}

func hoursUntilMidnight() int {
	now := time.Now()
	midnight := time.Date(now.Year(), now.Month(), now.Day() + 1, 0, 0, 0, 0, now.Location())
	return int(math.Floor(midnight.Sub(now).Hours()))
}

func main() {
	if len(os.Args) < 2 {
		printHelp()
		os.Exit(0)
	}

	var desiredDate, err = time.Parse("2006-01-02", os.Args[1])

	if err != nil {
		printError("Invalid date format.\n\n")
		printHelp()
		os.Exit(0)
	}

	now := time.Now()
	diff := desiredDate.Sub(now)

	if diff <= 0 {
		fmt.Println("\n\x1b[1;44m!!! The date has come !!!\x1b[0m\n")
		os.Exit(0)
	}

	days := int(diff.Hours() / 24)
	hours := hoursUntilMidnight()

	fmt.Printf("\x1b[0;32m%d days %d hours\x1b[0m\n", days, hours)
}
