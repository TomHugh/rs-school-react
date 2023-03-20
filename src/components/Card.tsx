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
    <div className="card">
      <img src={props.thumbnail} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.rating}</p>
      <p>{props.stock}</p>
    </div>
  );
}

export default Card;
