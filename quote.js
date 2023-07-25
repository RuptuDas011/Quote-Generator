let btn = document.querySelector(".button");
let quote= document.querySelector(".quote");
let author =document.querySelector(".author");

  const newQuotes = ["Be yourself ,no fake energy","If you dream it  you can do it","You need to be persistent to be the thing you want"];
  const newAuthor =["Newton","Iman Gadzhi","Obama"]
    btn.addEventListener("click" , () => {
     
    const singleQuote= Math.floor(Math.random()*newQuotes.length);
    const authorName= Math.floor(Math.random()*newAuthor.length);

        quote.innerText = newQuotes[singleQuote];
        author.innerText=newAuthor[authorName];
       
    });