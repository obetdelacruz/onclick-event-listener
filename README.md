ummary: in this tutorial, you will learn about the JavaScript events, event models, and how to handle events.

Introduction to JavaScript events
An event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.

For example, when users click a button on a webpage, you may want to respond to this click event by displaying a dialog box.

Each event may have an event handler which is a block of code that will execute when the event occurs.

An event handler is also known as an event listener. It listens to the event and executes when the event occurs.

Suppose you have a button with the id btn:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>The Onclick Event Listener</title>
  </head>
  <body>
    <h1>People entered;</h1>
    <h2 id="count-el">0</h2>

see below button with an id of "increment-btn"
<button id="increment-btn">INCREMENT</button>

    <script src="script.js"></script>

  </body>
</html>

To define the code that will be executed when the button is clicked, you need to register an event handler using the addEventListener() method:

const incrementBtn = document.querySelector("#increment-btn");

function countClick() {
console.log("The button was clicked");
}

incrementBtn.addEventListener("click", countClick);

How it works.

First, select the button with the id btn by using the querySelector() method.
Then, define a function called display() as an event handler.
Finally, register an event handler using the addEventListener() so that when users click the button, the display() function will be executed.
A shorter way to register an event handler is to place all code in an anonymous function, like this:

incrementBtn.addEventListener("click", function () {
console.log("The button was clicked");
});
