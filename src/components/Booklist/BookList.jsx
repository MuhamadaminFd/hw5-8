import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAllBooks from '../../store/reducers/bookListCreator';
import BookListItem from './BookListItem';
import { addBookToCart } from '../../store/reducers/cartReducers';

const BookList = () => {
  const { books, isLoading, isError} = useSelector((state) => state.bookList)
  const dispatch = useDispatch();
  const onAddToCart = (id ) => dispatch(addBookToCart(id))

  useEffect(() => {
     dispatch(fetchAllBooks());
  }, [])
  return (
    <div>
      {isError && isError}
      {isLoading
       ? 'loading...'
       : books?.map((book) => 
        <BookListItem book={book} key={`book-${book.id}`} addToCart={(id) => console.log(id,
          'clicked')} />
        )}
    </div>
  )
}

export default BookList;