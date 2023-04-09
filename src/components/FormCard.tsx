import { IFormData } from './FormBody';

function FormCard(props: IFormData) {
  return (
    <div className="bg-gray-100 border-solid border-2">
      <img
        className="object-cover h-48 w-96"
        src={URL.createObjectURL(props.photo[0])}
        alt={props.name}
      />
      <div className="px-4">
        <h2 className="text-lg font-bold py-2">{props.name}</h2>
        <p>Birthday: {props.birthday}</p>
        <p>Gender: {props.gender}</p>
        <p>Localization: {props.localization}</p>
        <p>Hobbies: {props.hobbies}</p>
      </div>
    </div>
  );
}

export default FormCard;
