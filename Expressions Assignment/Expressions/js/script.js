//  Nathan Wisdom
//  SDI 1503
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
hourWeek = prompt("Please enter how many hours you worked this week.");
var weekPay = hourWeek * myPay

console.log("Your weekly pay should be  " + weekPay + "");

//  Variables
var weekPay                         = 40 * 12.93
var bonusCheck;
bonusCheck = prompt("How much is your yearly bonus check at work?")
var totalCheck                      = weekPay + bonusCheck
    console.log("Every year at " + myJob + " I get a yearly bonus. This year I got my weekly pay check of " + weekPay + " with a " + bonusCheck + "  bonus to make my check " + totalCheck +"")

