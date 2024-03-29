#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//1-    computer will genrate a random number   ---- Done
//2-    user input for gussing number           ---- Done
//3-    Campare user input with computer genarted number show result    
const randomNumber = Math.floor(Math.random()) * 1 - 6;
const answer = await inquirer_1.default.prompt([
    {
        name: "userguseednumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },
]);
if (answer.userguseednumber === randomNumber) {
    console.log("Congratulation! you gussed right number..");
}
else {
    console.log("You guess worng number.");
}
