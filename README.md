# Dude, where's my glass?

A fine CLI that simulates placement, turns and movement of a glass on a table. After you enter some information, the program will either tell you where your glass is, or the tragic news that you've somehow lost it.

## Install and run

I would suggest clone or download, then `npm install` and `node index.js` to run this CLI.

## Instructions

There are two branches of this CLI (**main** and **singleInput**).
If you run from **main**, you will be asked five questions (Height and width of the table, position of the glass expressed as x and y, and finally the commands you would like to use on the glass. These should be entered as a comma-separated string ending with a zero, like this

`4,3,1,2,1,1,0`

If you run the program from the **singleInput** branch, you will only be asked one question. If you would like a 3x3-table, a glass placed in the middle and then move it to the right, you should enter:

`3,3,1,1,3,1,0`

### Commands

0. Exit program
1. Glass, go forward!
2. Not so fast, glass. Better go back one step.
3. Turn the glass clockwise.
4. Well actually, please turn the glass the other way.

## What's inside?

Mostly JS and some reliance of the fine node package [inquirer](https://www.npmjs.com/package/inquirer), which helps a lot with the questioning.
