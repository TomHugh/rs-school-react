import data from '../data/products.json';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <SearchBar />
      <div className="p-2 grid gap-4 grid-cols-4">
        {data.map((card) => (
          <Card
            key={card.id}
            thumbnail={card.thumbnail}
            title={card.title}
            description={card.description}
            price={card.price}
            rating={card.rating}
            stock={card.stock}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
