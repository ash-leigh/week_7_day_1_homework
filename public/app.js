// Quotes App

// The quotes are all hardcoded in our web page. Let's start moving towards having a dynamic web application and set the existing quotes programatically via JavaScript.

// Create an array of the existing quotes, each quote having text and author
// Add the quotes to the page dynamically with JavaScript
// Further:

// Extend our quote application so that a user can add quotes. (Don't worry about these saving between refreshing page, we'll do this tomorrow)
// Even Further:

// Add functionality to delete quotes
// Style page
// Even Even Further:

// While typing show the quote being created in real time.

window.onload = main;

var quotes = [{author: "Nat", text: "WTF"}, {author: "Ash", text:"I know right!"}]

function main(){
  addInitial();
  typeRealTime();
  var form = document.getElementById('quote-form');
  form.onsubmit = function(event){
    event.preventDefault();
    handleClick();
  }
}

function handleClick(event){
  var userInputText = document.getElementById('quote-text-input').value;
  var userInputAuthor = document.getElementById('author-text-input').value;
  addNew(userInputText, userInputAuthor)
  userInputText.value = ' ';
}

function addInitial(){
  for (quote in quotes) {
    addNew(quotes[quote].text, quotes[quote].author);
  }
}

function addNew(userInputText, userInputAuthor){
  var li = document.createElement('li');
  li.setAttribute('href', '#');
  li.setAttribute('onclick', 'remove(this)');
  li.setAttribute('id', 'list');
  li.innerText = userInputText + "  ";

  var cite = document.createElement('cite');
  cite.classList.add('author');
  cite.innerText = userInputAuthor;

  li.appendChild(cite);

  var ul = document.getElementById('quote-list');
  ul.appendChild(li);
}

function remove(link){
  link.parentNode.parentNode.removeChild(link.parentNode);
}

function typeRealTime(){
  // addNew();
  var inputBox = document.getElementById('quote-text-input');
  inputBox.setAttribute('onkeyup', 'instantText()');
}

function instantText(){
  var listItem = document.getElementById('userInputText');
  document.getElementById('list').innerHTML = listItem.value;
}







