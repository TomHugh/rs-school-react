import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const genders = ['Male', 'Female'];
const localizations = ['Africa', 'Australia', 'Europe', 'North America', 'South America'];
const hobbies = ['Reading', 'Sports', 'Music', 'Hiking'];
const succesMsgText = 'Form has been successfully sent';

export interface IFormData {
  name: string;
  birthday: string;
  gender: string;
  localization: string;
  hobbies: string[];
  photo: FileList;
}

interface Props {
  saveForm: (data: IFormData) => void;
}

function FormBody(props: Props) {
  const [successMsg, setSuccessMsg] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    props.saveForm(data);
    showSuccessMsg();
  };

  const showSuccessMsg = () => {
    setSuccessMsg(succesMsgText);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="px-2 border-solid border-2" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <br />
        <input
          className="border-solid border-2"
          type="text"
          {...register('name', {
            required: 'Name is required',
            pattern: { value: /^[A-Z]/, message: 'Name should start from capital letter' },
          })}
        />
        {errors.name && <span className="text-red-400"> {errors.name?.message} </span>}
      </label>
      <br />
      <label>
        Date of birth:
        <br />
        <input
          className="border-solid border-2"
          type="date"
          {...register('birthday', { required: true })}
        />
        {errors.birthday && <span className="text-red-400">Date of birth is required</span>}
      </label>
      <br />
      <label>
        Gender:
        <br />
        {genders.map((gender) => (
          <label key={gender}>
            <input type="radio" {...register('gender', { required: true })} value={gender} />
            {gender}
          </label>
        ))}
        {errors.gender && <span className="text-red-400">Select your gender</span>}
      </label>
      <br />
      <label>
        Localization:
        <br />
        <select className="border-solid border-2" {...register('localization', { required: true })}>
          <option value="">Select localization</option>
          {localizations.map((localization) => (
            <option key={localization} value={localization}>
              {localization}
            </option>
          ))}
        </select>
        {errors.localization && <span className="text-red-400">Select your localization</span>}
      </label>
      <br />
      <label>
        Hobbies:
        <br />
        {hobbies.map((hobby) => (
          <label key={hobby}>
            <input
              type="checkbox"
              {...register('hobbies', { validate: (values) => values.length > 0 })}
              value={hobby}
            />
            {hobby}
          </label>
        ))}
        {errors.hobbies && <span className="text-red-400">Check at least one hobby</span>}
      </label>
      <br />
      <label>
        Profile photo:
        <br />
        <input type="file" {...register('photo', { required: true })} />
        {errors.photo && <span className="text-red-400">Please attach a photo</span>}
      </label>
      <br />
      <button className="bg-teal-600 text-white px-4" type="submit">
        Submit
      </button>
      <span className="text-teal-600">{successMsg}</span>
    </form>
  );
}
export default FormBody;
