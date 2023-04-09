interface IMovieDetailsCard {
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: number;
  revenue: number;
  production_companies: [{ name: string }];
}

function MovieDetailsCard(props: IMovieDetailsCard) {
  return (
    <div className="flex">
      <img
        className="max-w-md object-cover"
        src={props.poster_path}
        alt={'Poster of ' + props.title}
      />
      <div className="px-4 max-w-md">
        <h2 className="text-lg font-bold py-2">{props.title}</h2>
        <p>{props.release_date}</p>
        <p>{props.overview}</p>
        <p>Score: {props.vote_average}</p>
        <p>Revenue: {props.revenue}</p>
        <p>
          Production companies:
          {props.production_companies.map((comp, index) => (
            <li key={index}>{comp.name}</li>
          ))}
        </p>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
