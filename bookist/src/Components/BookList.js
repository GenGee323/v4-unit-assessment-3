import React from 'react';

const BookList = props =>{
let mappedBooks = props.books.map((e, i) =>{
    return(
       <div key={i}><img src= {e.img} onClick={() => props.addTShelf(e.title)}/>
       <p> {e.title} by {e.author}</p>
</div>
    )
})
return mappedBooks
}


export default BookList;