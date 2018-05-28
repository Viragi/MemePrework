var form1 = document.querySelector("form");
console.log(form1);

form1.addEventListener("submit", function (event) {
  /*
  form submit- 
    1. prevent default,
    2. take values using name;
    3. create new div 
    4. set all the values
    5 append it to parent 
  */
  event.preventDefault();

  var first = form1.textTop.value;
  var second = form1.imageLink.value;
  var third = form1.textBottom.value;
  console.log(first, second, third);


  var maindiv = document.createElement("div");
  maindiv.classList.add("blackDivs");

  var meme1 = document.createElement("div");
  meme1.classList.add("memeDisplay");
  var meme2 = document.createElement("img");
  var meme3 = document.createElement("div");
  meme3.classList.add("memeDisplay");
  var meme4 = document.createElement("div");
  meme4.classList.add("buttonDelete");

  var rvm = document.createElement("button");
  rvm.innerHTML = "Remove";

  meme4.appendChild(rvm);

  meme1.innerHTML = first;
  meme2.setAttribute("src", second);
  meme3.innerHTML = third;

  maindiv.appendChild(meme1);
  maindiv.appendChild(meme2);
  maindiv.appendChild(meme3);
  maindiv.appendChild(meme4);
  var parent = document.getElementById("container");
  parent.appendChild(maindiv);

  form1.reset();

  //Remove Element

  rvm.addEventListener("click", function (event) {
    var child = event.target;
    var delparent = event.target.parentElement.parentElement;
    delparent.parentElement.removeChild(delparent);
  });




})

