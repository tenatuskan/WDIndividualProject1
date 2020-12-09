const $ = function (take) { return document.getElementById(take); };

const isLocalStorageEnabled = function () { // check if local storage is enabled
  let foo = 'bar';
  try {
      localStorage.setItem(foo, foo);
      localStorage.removeItem(foo);
      return true;
  } catch(e) {
      return false;
  }
}

let books = [];

let book = { //object that will be cloned
  all: "all",
  genre: "Biography",
  title: "Bossypants",
  author: "Tina Fey"
}

const bookDepository = function(){
    let boo = Object.assign({},book); //clone object
    books.push(boo);

    boo = Object.assign({},book); // assign new value
    boo.all = "all";
    boo.genre = "Biography";
    boo.title = "Becoming";
    boo.author = "Michelle Obama";
    books.push(boo); // push cloned objects into empty array

    boo = Object.assign({},book);
    boo.all = "all";
    boo.genre = "Biography";
    boo.title = "Steave Jobs";
    boo.author = "Walter Isaccson";
    books.push(boo);

    boo = Object.assign({},book);
    boo.all = "all";
    boo.genre = "Fiction";
    boo.title = "Tweet Cute";
    boo.author = "Emma Lord";
    books.push(boo);

    boo = Object.assign({},book);
    boo.all = "all";
    boo.genre = "Fiction";
    boo.title = "Flipped";
    boo.author = "Wendelin Van Drannen";
    books.push(boo);

    boo = Object.assign({},book);
    boo.all = "all";
    boo.genre = "Fiction";
    boo.title = "Turtles All The Way Down";
    boo.author = "John Green";
    books.push(boo);

    boo = Object.assign({},book);
    boo.all = "all";
    boo.genre = "Poetry";
    boo.title = "Milk And Honey";
    boo.author = "Rupi Kaur";
    books.push(boo);

    boo = Object.assign({},book);
    boo.all = "all";
    boo.genre = "Poetry";
    boo.title = "Deeper Than The Ocean";
    boo.author = "Emma Rose";
    books.push(boo);

    if (isLocalStorageEnabled) {  // turn objects from array into strings and store them if local storage is enabled on browser
      localStorage.removeItem('books'); 
      let foo = JSON.stringify(books);
      localStorage.setItem('books', foo);
  }
}

window.addEventListener('load', bookDepository); 

const titlesort = function () { // sort and display objects alphabetically by title 
  books.sort((a, b) => {
    if(a.title > b.title){
      return 1
    } else {
      return -1
    }
  });
  show(target);
}

const authorsort = function () { // sort and display objects alphabetically by author
  books.sort((a, b) => {
    if(a.author > b.author){
      return 1
    } else {
      return -1
    }
  });
  show(target);
}

const all = function (e) { // sort data by genre or display all, depends on clicked button
  target = e.target.id;
  show(target);
};

const show = function (id) { // display table to user depending on the id of objects
  $('display').innerHTML = '';
  for (let book of books) { // loops through array
    if (id != 'All') 
      if (id != book.genre)  
        continue; // executes the one that is not true - example. if ID doesn't equal 'all' it's true and therefore it targets the ID depending on genre
    let r = document.createElement('tr'); 
    let d = document.createElement('td'); 
    let t = document.createTextNode(`${book.author}, `);
    d.appendChild(t);
    r.appendChild(d);
    d = document.createElement('td');
    let i = document.createElement('i');
    t = document.createTextNode(`${book.title}`);
    i.appendChild(t);
    d.appendChild(i);
    r.appendChild(d);
    $("display").appendChild(r); // creates table data inside table rows and displays it within two columns sorted by author or title
  }
}


function allbtn() {  // method for clicking on buttons that calls specific functions
  $("All").addEventListener("click", all);
  $("Fiction").addEventListener("click", all);
  $("Biography").addEventListener("click", all);
  $("Poetry").addEventListener("click", all);
  $("author").addEventListener("click", authorsort);
  $("title").addEventListener("click", titlesort);
}

var target = 'All';
show(target);
allbtn();

function addNewBook() { // takes user input and pushes it into array containing all book data
  var titleNew = $('titleNew');
  var authorNew = $('authorNew');
  var genreNew = Array.from(document.getElementsByName("Genre")).find(r => r.checked).value; // takes value from radio input
  books.push({ all: "all", title: titleNew.value, author: authorNew.value, genre: genreNew}); // combines input in the new object array
  }

/*const addNewBook = function(){   ---- Code I would love to get feedback on what I did wrong
  if (isLocalStorageEnabled){
    let foo = localStorage.getItem('books');   
    let books = JSON.parse(foo); 

    let boo = Object.assign({},'book');
    boo.all = 'all';
    boo.author = document.getElementById('authorNew');
    boo.title = document.getElementById('titleNew');
    boo.genre = 'Poetry';
    books.push(boo);
    
    let bar = JSON.stringify(books);
    localStorage.setItem('books', bar);
  }
  else {
    console.log('god help me')
  }
  window.addEventListener('load', addNewBook);};*/