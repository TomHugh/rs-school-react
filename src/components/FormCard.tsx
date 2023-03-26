import React from 'react';

interface Props {
  thumbnail: string;
  name: string;
  birthday: string;
  gender: string;
  localization: string;
  hobbies: string;
}

function FormCard(props: Props) {
  return (
    <div className="bg-gray-100 border-solid border-2">
      {/* <img className="object-cover h-48 w-96" src={props.thumbnail} alt={props.name} /> */}
      <div className="px-4">
        <h2 className="text-lg font-bold py-2">{props.name}</h2>
        <p>{props.birthday}</p>
        <p>Gender: {props.gender}</p>
        <p>Localization: {props.localization}</p>
        <p>Hobbies: {props.hobbies}</p>
      </div>
    </div>
  );
}

export default FormCard;
