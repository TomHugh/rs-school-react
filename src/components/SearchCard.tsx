export interface ISearchCard {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  onClick: (id: number) => void;
}

function SearchCard(props: ISearchCard) {
  return (
    <div className="bg-gray-100 border-solid border-2" onClick={() => props.onClick(props.id)}>
      <img className="object-cover" src={props.poster_path} alt={'Poster of ' + props.title} />
      <div className="px-4">
        <h3 className="text-lg font-bold py-2">{props.title}</h3>
        <p>{props.release_date}</p>
        <p>Score: {props.vote_average}</p>
        {/* <button onClick={() => props.onClick(props.id)}>See more</button> */}
      </div>
    </div>
  );
}

export default SearchCard;
