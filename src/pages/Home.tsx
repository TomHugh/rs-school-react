/* eslint-disable prettier/prettier */
import React from 'react';
import data from '../data/products.json';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';


function Home() {
  return (
    <React.Fragment>
      <Header currentRoute={'Home'} />
      <SearchBar placeholder={'Search...'} />
      <div className="px-2 p-2 grid gap-4 grid-cols-4">
        {data.map((card) => (
          <Card key={card.id}
                thumbnail={card.thumbnail} 
                title={card.title} 
                description={card.description}
                price={card.price}
                rating={card.rating}
                stock={card.stock}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
