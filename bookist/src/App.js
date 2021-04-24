import React, {Component} from 'react';
import './App.css';
import Header from '.Components/Header';
import BookList from '.Components/BookList';
import Shelf from '.Components/Shelf';
import SearchBar from '.Components/SearchBar'; 
import data from './data'; 



class App extends Component {
constructor (){
  super ()
  this.state ={
    book: data,
    shelf: []
  } 
  this.addToShelf = this.addToShelf.bind(this)
  this.clearShelf = this.clearShelf.bind(this)
  this.filterBooks = this.filterBooks.bind(this)
  this.reset = this.reset.bind(this)
}
addToShelf(book) {
  console.log(book)
  this.setState({
    shelf:[...this.state.shelf, book]
  })
}
clearShelf(){
  this.setState({
    shelf:[]
  })
}
filterBooks(input){
  let filterBooks = this.state.filter(e => e.title.includes(input))
  this.setState({
    books: filterBooks
  })
}
reset(){
  this.setState({
    book:data
  })
}
render(){
  return (
    <div className="App">
      <Header/>
      <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
    <div ClassName="bookshelf">
      <BookList books={this.state.books} addToShelf={this.addToShelf} className='bookList'/>
    </div>
    <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} className='shelf'/>
    </div>
  );
}
}

export default App;
