import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';
import Modal from '../components/Modal';
import MovieDetailsCard from '../components/MovieDetailsCard';
import { ISearchCard } from '../components/SearchCard';
import { ReactNode, useEffect, useState } from 'react';
import noImage from '../assets/no_image.jpeg';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const APIKey = '66518c6104b6ff29f23f75316c47fa8a&query';
const initialReq = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + APIKey;
const searchReq = 'https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&query=';
const detailsReq = 'https://api.themoviedb.org/3/movie/';

function Home() {
  const query = useSelector((state: RootState) => state.searchQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCards, setSearchCards] = useState<ISearchCard[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>('');

  useEffect(() => {
    setIsLoading(true);
    let request: string;
    query.value === '' ? (request = initialReq) : (request = searchReq + query.value);
    fetch(request)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchCards(data.results);
      });
    setIsLoading(false);
  }, [query, isLoading]);

  const handleOpenModal = (id: number) => {
    fetch(detailsReq + id + '?api_key=' + APIKey)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setModalContent(
          <MovieDetailsCard
            poster_path={
              data.poster_path ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : noImage
            }
            title={data.title}
            overview={data.overview}
            vote_average={data.vote_average}
            release_date={data.release_date}
            revenue={data.revenue}
            production_companies={data.production_companies}
          />
        );
        console.log(data);
      });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <>
      <SearchBar />
      {isLoading && <div>Progressing...</div>}
      {searchCards.length === 0 && <div>No results</div>}
      <div className="p-2 grid gap-4 grid-cols-6">
        {searchCards &&
          searchCards.map((card, index) => (
            <SearchCard
              key={index}
              id={card.id}
              poster_path={
                card.poster_path ? 'https://image.tmdb.org/t/p/w500/' + card.poster_path : noImage
              }
              title={card.title}
              release_date={card.release_date}
              vote_average={card.vote_average}
              onClick={(id) => handleOpenModal(id)}
            />
          ))}
      </div>
      {isModalOpen && <Modal content={modalContent} onClose={handleCloseModal} />}
    </>
  );
}

export default Home;
