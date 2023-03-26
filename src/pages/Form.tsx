import React, { Component } from 'react';
import FormCard from '../components/FormCard';

interface FormData {
  name: string;
  birthday: string;
  gender: string;
  localization: string;
  hobbies: string[];
  file: File | null;
}

interface FormState {
  formData: FormData;
  formErrors: Record<string, string>;
  confirmationMessage: string;
  cards: FormData[];
}

class Form extends Component<unknown, FormState> {
  nameRef = React.createRef<HTMLInputElement>();
  birthdayRef = React.createRef<HTMLInputElement>();
  genderMRef = React.createRef<HTMLInputElement>();
  genderFRef = React.createRef<HTMLInputElement>();
  localizationRef = React.createRef<HTMLSelectElement>();
  fileRef = React.createRef<HTMLInputElement>();

  state: FormState = {
    formData: {
      name: '',
      birthday: '',
      gender: '',
      localization: '',
      hobbies: [],
      file: null,
    },
    formErrors: {},
    confirmationMessage: '',
    cards: [],
  };

  hobbiesList: string[] = ['Dancing', 'Running', 'Swimming', 'Jumping'];
  hobbiesRef: React.RefObject<HTMLInputElement>[] = this.hobbiesList.map(() =>
    React.createRef<HTMLInputElement>()
  );

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name: this.nameRef.current?.value || '',
      birthday: this.birthdayRef.current?.value || '',
      gender: this.genderMRef.current?.checked
        ? 'male'
        : this.genderFRef.current?.checked
        ? 'female'
        : '',
      localization: this.localizationRef.current?.value || '',
      hobbies: [''],
      file: this.fileRef.current?.files || '',
    };
    if (!this.validateFormData(formData)) return;

    const cards = [...this.state.cards, formData];
    this.setState({ cards });
  };

  validateFormData = (formData: FormData) => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    const nameRegex = /^[A-Z]/;
    if (formData.name.trim() && !nameRegex.test(formData.name.trim())) {
      errors.name = 'Name should start with an uppercase letter';
    }
    if (!formData.birthday) {
      errors.birthday = 'Please select date';
    }

    if (!formData.gender) {
      errors.gender = 'Please select gender';
    }

    if (!formData.localization) {
      errors.localization = 'Please select localization';
    }

    if (!formData.hobbies) {
      errors.hobbies = 'Please select hobbies';
    }

    this.setState({ formErrors: errors });

    return Object.keys(errors).length === 0;
  };

  render() {
    return (
      <>
        <div>
          <form className="px-2 border-solid border-2" onSubmit={this.handleSubmit}>
            <legend>Name:</legend>
            <input className="border-solid border-2" type="text" ref={this.nameRef} />
            <p className="text-red-400">{this.state.formErrors.name}</p>
            <legend>Date of birth:</legend>
            <input className="border-solid border-2" type="date" ref={this.birthdayRef} />
            <p className="text-red-400">{this.state.formErrors.birthday}</p>
            <div>
              <legend>Gender:</legend>
              <input type="radio" value="male" name="gender" ref={this.genderMRef} />
              <label>Male</label>

              <input type="radio" value="female" name="gender" ref={this.genderFRef} />
              <label>Female</label>
              <p className="text-red-400">{this.state.formErrors.gender}</p>
            </div>
            <legend>Localization:</legend>
            <select className="border-solid border-2" ref={this.localizationRef}>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
            </select>
            <p className="text-red-400">{this.state.formErrors.localization}</p>
            <legend>Hobbies:</legend>
            {this.hobbiesList.map((hobby, index) => (
              <>
                <div>
                  <input
                    key={index}
                    id={hobby}
                    type="checkbox"
                    name="hobbies"
                    ref={this.hobbiesRef[index]}
                  />
                  <label htmlFor={hobby}>{hobby} </label>
                </div>
              </>
            ))}
            <button className="bg-teal-600 text-white px-4" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="p-2 grid gap-4 grid-cols-4">
          {this.state.cards.map((card, index) => (
            <FormCard
              key={index}
              thumbnail={''}
              name={card.name}
              birthday={card.birthday}
              gender={card.gender}
              localization={card.localization}
              hobbies={card.hobbies.toString()}
            />
          ))}
        </div>
      </>
    );
  }
}
export default Form;
