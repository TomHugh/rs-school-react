import FormBody from '../components/FormBody';
import FormCard from '../components/FormCard';
import { IFormData } from '../components/FormBody';
import { useState } from 'react';

function Form() {
  const [cards, setCards] = useState<IFormData[]>([]);
  return (
    <>
      <FormBody
        saveForm={(card) => {
          card.photo = { ...card.photo };
          setCards([...cards, card]);
        }}
      />
      <div className="p-2 grid gap-4 grid-cols-4">
        {cards.map((card, index) => (
          <FormCard
            key={index}
            photo={card.photo}
            name={card.name}
            birthday={card.birthday}
            gender={card.gender}
            localization={card.localization}
            hobbies={card.hobbies}
          />
        ))}
      </div>
    </>
  );
}

export default Form;
