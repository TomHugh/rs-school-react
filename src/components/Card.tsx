interface Props {
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
}

function Card(props: Props) {
  return (
    <div className="bg-gray-100 border-solid border-2">
      <img className="object-cover h-48 w-96" src={props.thumbnail} alt={props.title} />
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <p>Rating: {props.rating}</p>
      <p>Stock: {props.stock}</p>
    </div>
  );
}

export default Card;
