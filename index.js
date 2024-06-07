function fetchBooks() {
  return fetch(`https://anapioficeandfire.com/api/books`)
.then((r)=> r.json())
.then((books)=>{
  return renderBooks(books)
  }
)
}
  // To pass the tests, don't forget to return your fetch!
//   fetch(`https://anapioficeandfire.com/api/books`)
//     .then((r)=> r.json())
//     .then((books)=>{ 
//       console.log(books)
//       return fetch()
      
//     })
// }


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// fetch(`https://anapioficeandfire.com/api/books`)
// .then((r)=> r.json())
// .then((book)=>{
//   return renderBooks(book.name) 
//   }
// )

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
