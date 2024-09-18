import './App_78.scss'
import Booklist_78 from './components/Booklist_78'

// fragment

const App_78 = () => {
  return <Booklist_78></Booklist_78>
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

export default App_78
