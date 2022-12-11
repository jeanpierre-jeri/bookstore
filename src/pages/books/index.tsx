import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BookCard } from "../../components/molecules/BookCard";
import { Book, Books as BooksData } from "../../interfaces/books";
const Books = () => {
  const { books } = useLoaderData() as BooksData;
  const [inputText, setInputText] = useState<string>("");
  const [currentBooks, setCurrentBooks] = useState<Book[]>([]);

  const fetchInputText = async (text: string) => {
    const { data } = await axios.get(
      `https://api.itbook.store/1.0/search/${text}`
    );
    const books = await data.books;
    setCurrentBooks(books);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    inputText.trim().length === 0
      ? setCurrentBooks(books)
      : fetchInputText(inputText);
  }, [inputText]);

  return (
    <main className="container mx-auto py-20">
      <h1 className="text-5xl mb-20">Books</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="bg-gray-500 text-white"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 ">
        {currentBooks.length > 0 ? (
          currentBooks.map(({ title, subtitle, image, isbn13, price }) => (
            <BookCard
              key={isbn13}
              title={title}
              subtitle={subtitle}
              image={image}
              isbn13={isbn13}
              price={price}
            />
          ))
        ) : (
          <p className="text-center text-6xl col-span-4">
            Book not found, try again
          </p>
        )}
      </section>
    </main>
  );
};

export default Books;

export const loaderBooks = async () => {
  const { data } = await axios.get("https://api.itbook.store/1.0/new");
  return { books: data.books };
};
