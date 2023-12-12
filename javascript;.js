let book = {}; //using objects to display info in product page-not used

  var order1 = 0; //keeps track of the different orders
  var order2 = 0;
  var order3 = 0;
  var order4 = 0;
  var order5 = 0;
  var order6 = 0;
function countPr(o){ //add amt orders
  o++;
}
function d(){ //display all the orders
      document.getElementById("order").innerHTML = "Order: " + order1 + " " + order2 + " " + order3 + " " + order4 + " " + order5 + " " + order6;
}

function cash(){ //finds total cost
    return order1*getCost(b1) + order2*getCost(b2) + order3*getCost(b3) + order4*getCost(m1) + order5*getCost(m2) + order6*getCost(m3);
  
}




//all info on the books - learn how to display using functions/objects
let b1 = {
    name: "Unhinged",
    author: "Vera Valentine",
    pages: 71,
    publish: new Date(2023, 7, 10),
    rating: 5,
    cost: 8.99
};
let b2 = {
    name: "Get In My Swamp: An Ogre Love Story",
    author: "G.M. Fairy",
    pages: 194,
    publish: new Date(2023, 9, 28),
    rating: 5,
    cost: 14.99,

};
let b3 = {
    name: "Love Hypothesis",
    author: "Ali Hazelwood",
    pages: 383,
    publish: new Date(2021, 9, 14),
    rating: 3,
    cost: 10.70,

};
let m1 = {
    name: "Beautiful Disaster",
    cast: [],
    publish: new Date(),
    rating: 5,
    cost: 20.99

};
let m2 = {
    name: "The Room",
    cast: [],
    publish: new Date(),
    rating: 4,
    cost: 11.99

};
let m3 = {
    name: "Kissing Booth",
    cast: [],
    publish: new Date(),
    rating: 4,
    cost: 14.99

};



//functions to get info to product page/order page- needs work
//using toggle to display
function getAuthor(option) {
  switch(option){
    case b1:
    case b2:
    case b3:
      return this.option.author; //returns author in books
      break;
    case m1:
    case m2:
    case m3:
      return option.cast[0];
      break;
      /*while(let i = 0; i < option.cast; i++){
      
        }*/
  } //returns array of cast in movies
}

function getPublish(option) {
  return this.option.publish;
}

function getRating(option) {
  return this.option.rating;
}
function getCost(option) {
  return this.option.cost;
}


//toggle functions- needs work
function displayb1() {
  var a = document.getElementById("b1");
  var b = document.getElementById("b2");
  var c = document.getElementById("b3");
  var d = document.getElementById("m1");
  var e = document.getElementById("m2");
  var f = document.getElementById("m3");
  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    } else {
      a.style.display = "none";
    }
 
}

function displayb2() {
  var a = document.getElementById("b1");
  var b = document.getElementById("b2");
  var c = document.getElementById("b3");
  var d = document.getElementById("m1");
  var e = document.getElementById("m2");
  var f = document.getElementById("m3");
  if (a.style.display === "none") {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
  } else {
      b.style.display = "none";
  }
  
}

function displayb3() {
  var a = document.getElementById("b1");
  var b = document.getElementById("b2");
  var c = document.getElementById("b3");
  var d = document.getElementById("m1");
  var e = document.getElementById("m2");
  var f = document.getElementById("m3");
    if (c.style.display === "none") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        
      } else {
        c.style.display = "none";
      }
   
}

function displaym1() {
  var a = document.getElementById("b1");
  var b = document.getElementById("b2");
  var c = document.getElementById("b3");
  var d = document.getElementById("m1");
  var e = document.getElementById("m2");
  var f = document.getElementById("m3");
    if (c.style.display === "none") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";

      } else {
        d.style.display = "none";
      }
   
}

function displaym2() {
  var a = document.getElementById("b1");
  var b = document.getElementById("b2");
  var c = document.getElementById("b3");
  var d = document.getElementById("m1");
  var e = document.getElementById("m2");
  var f = document.getElementById("m3");
    if (c.style.display === "none") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "none";

      } else {
        e.style.display = "none";
      }
  
}

function displaym3() {
  var a = document.getElementById("b1");
  var b = document.getElementById("b2");
  var c = document.getElementById("b3");
  var d = document.getElementById("m1");
  var e = document.getElementById("m2");
  var f = document.getElementById("m3");
    if (c.style.display === "none") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "block";

      } else {
        f.style.display = "none";
      }
}
