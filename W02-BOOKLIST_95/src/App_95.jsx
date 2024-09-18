import './App_95.scss'

// fragment

const App_95 = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <img src='https://m.media-amazon.com/images/I/81CRBxBBUuL._SY342_.jpg' />
      <div className='bookinfo'>
        <h1>Song of the Six Realms</h1>
        <h4>Judy I. Lin</h4>
      </div>
    </article>
  )
}

export default App_95
