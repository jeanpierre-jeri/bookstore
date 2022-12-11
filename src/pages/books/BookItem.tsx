import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { Book } from '../../interfaces'
import axios from 'axios'

export async function loader({ params }: LoaderFunctionArgs) {
  const { data: book } = await axios.get<Book>(`https://api.itbook.store/1.0/books/${params.bookId}`)

  return { book }
}

export const BookItem = () => {
  const { book } = useLoaderData() as { book: Book }
  return (
    <main className="container mx-auto">
      <div>
        <picture>
          <img src={book.image} alt={book.title} />
        </picture>
        <div className="px-4 md:px-0 grid max-w-xl gap-x-8 gap-y-4" style={{ gridTemplateColumns: 'max-content 1fr' }}>
          <p>Title:</p>
          <p>{book.title}</p>
          <p>Subtitulo:</p>
          <p>{book.subtitle}</p>
          <p>Autor:</p>
          <p>{book.authors}</p>
          <p>Editorial:</p>
          <p>{book.publisher}</p>
          <p>Código:</p>
          <p>{book.isbn13}</p>
          <p>Año:</p>
          <p>{book.year}</p>
          <p>Precio:</p>
          <p>{book.price}</p>
          <p>Descripción:</p>
          <p>{book.desc}</p>
          <p>Rating:</p>
          <p>{book.rating}</p>
        </div>
      </div>
    </main>
  )
}
