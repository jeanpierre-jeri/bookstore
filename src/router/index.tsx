import { createBrowserRouter } from 'react-router-dom'
import Books from '../pages/books'
import { BookItem, loader as LoaderBookItem } from '../pages/books/BookItem'
import { Checkout } from '../pages/checkout'
import { Login } from '../pages/login'
import { NotFound } from '../pages/NotFound'
import { Users } from '../pages/users'
import { CartUser } from '../pages/users/CartUser'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/books',
    element: <Books />,
    errorElement: <NotFound />
  },
  {
    path: '/books/:bookId',
    loader: LoaderBookItem,
    element: <BookItem />,
    errorElement: <NotFound />
  },
  {
    path: '/users',
    element: <Users />,
    errorElement: <NotFound />
  },
  {
    path: '/users/:userId/cart',
    element: <CartUser />,
    errorElement: <NotFound />
  },
  {
    path: '/checkout/:userId',
    element: <Checkout />,
    errorElement: <NotFound />
  }
])
