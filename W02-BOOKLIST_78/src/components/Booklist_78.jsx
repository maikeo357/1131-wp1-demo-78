import Book_78 from './Book_78'
import books_data from './data/book_data2'

console.log('books_data', books_data)

const Booklist_78 = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, img, title, author } = book
        return (
          <Book_78 key={id} img={img} title={title} author={author}></Book_78>
        )
      })}
    </section>
  )
}
export default Booklist_78
