import { NavigateFunction, useNavigate } from "react-router-dom";

interface BookCardProps {
  title: string;
  subtitle: string;
  image: string;
  isbn13: string;
  price: string;
}

export const BookCard = ({
  subtitle,
  title,
  image,
  isbn13,
  price,
}: BookCardProps) => {
  const navigate: NavigateFunction = useNavigate();

  const handleBookCard = (isbn13: string) => {
    navigate(`${isbn13}`);
  };

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => handleBookCard(isbn13)}
    >
      <img src={image} alt={title} />
      <div>
        <h2 className="text-2xl">{title}</h2>
        <h3 className="mt-6">{subtitle}</h3>
        <div>
          <span>Code:</span>
          <span>{isbn13}</span>
        </div>
        <div>
          <span>Price:</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};
