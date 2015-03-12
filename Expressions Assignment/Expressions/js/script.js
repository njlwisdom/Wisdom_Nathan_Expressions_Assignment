//  Nathan Wisdom
//  3-12-15
//  Expressions Project

// Add alert so that I know it works
//alert("You are doing good!");

//  Variables
//  My rate of pay per hour
var myPay;
//  How many hours I work per week
var hourWeek;
//  My place of employment
var myJob                           = "Tyson Foods Inc.";
myPay = prompt("Please enter your hourly rate of pay.")
// hours you worked this week
hourWeek = prompt("Please enter how many hours you worked this week.");
var weekPay = hourWeek * myPay

console.log("Your weekly pay should be  " + weekPay + "");

//  Variables
// my weekly pay based on hours worked and my pay per hour
var weekPay                         = 40 * 12.93
// prompt for yearly bonus check amount
var bonusCheck;
bonusCheck = prompt("How much is your yearly bonus check at work?")
// total check with weekly pay and bonus added together
var totalCheck                      = weekPay + bonusCheck
    console.log("Every year at " + myJob + " I get a yearly bonus. This year I got my weekly pay check of " + weekPay + " with a " + bonusCheck + "  bonus to make my check " + totalCheck +"")

