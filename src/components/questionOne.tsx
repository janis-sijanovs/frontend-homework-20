/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useState } from 'react';
import { getPresetData, ResultType } from '../data/data';

type QuestionProps = {
    data: ResultType,
    passData: (results: ResultType, page: number) => void,
  }

type ErrorType = {
  firstName: string[]
  lastName: string[]
  gender: string[]
}

const QuestionOne = ({ data, passData }: QuestionProps) => {
  const [results, setResults] = useState(data);

  const [showErrors, setShowErrors] = useState(false);

  const [errors, setErrors] = useState<ErrorType>({ firstName: [''], lastName: [''], gender: [''] });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    let newErrors: ErrorType = { firstName: [''], lastName: [''], gender: [''] };

    if (results.firstName === '') {
      newErrors = { ...newErrors, firstName: ['Nepieciešams ievadīt datus!'] };
    }
    if (results.lastName === '') {
      newErrors = { ...newErrors, lastName: ['Nepieciešams ievadīt datus!'] };
    }
    if (results.gender === '') {
      newErrors = { ...newErrors, gender: ['Nepieciešams izvēlēties!'] };
    }

    setFirstName(results.firstName);
    setLastName(results.lastName);
    setGender(results.gender);
    setErrors(newErrors);
  }, []);

  return (
    <div>
      <h2 className="h2">Pirmais Solis</h2>
      <div className="inline-input">

        <div className="input-group">
          <label htmlFor="firstName">Vārds:</label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (e.target.value.length === 1) {
                setErrors({ ...errors, firstName: ['Vārds ir pārāk īss'] });
              } else if (e.target.value.length < 1) {
                setErrors({ ...errors, firstName: ['Nepieciešams ievadīt datus!'] });
              } else {
                setErrors({ ...errors, firstName: [''] });
                setResults({ ...results, firstName: e.target.value });
              }
            }}
          />
          {showErrors && errors.firstName.map((error) => (
            <p key={error} className="help-block">{error}</p>
          ))}
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Uzvārds:</label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (e.target.value.length === 1) {
                setErrors({ ...errors, lastName: ['Vārds ir pārāk īss'] });
              } else if (e.target.value.length < 1) {
                setErrors({ ...errors, lastName: ['Nepieciešams ievadīt datus!'] });
              } else {
                setErrors({ ...errors, lastName: [''] });
                setResults({ ...results, lastName: e.target.value });
              }
            }}
          />
          {showErrors && errors.lastName.map((error) => (
            <p key={error} className="help-block">{error}</p>
          ))}
        </div>
      </div>

      <legend>
        Dzimums:
      </legend>

      <div className="radio-list">
        <div className="radio-button">
          <label htmlFor="male">Vrtietis</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="vīrietis"
            onChange={(e) => {
              setResults({ ...results, gender: e.target.value });
              setErrors({ ...errors, gender: [''] });
            }}
            checked={results.gender === 'vīrietis'}
          />
        </div>

        <div className="radio-button">
          <label htmlFor="female">Sieviete</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="sieviete"
            onChange={(e) => {
              setResults({ ...results, gender: e.target.value });
              setErrors({ ...errors, gender: [''] });
            }}
            checked={results.gender === 'sieviete'}
          />
        </div>

        <div className="radio-button">
          <label htmlFor="other">Cits</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="cits"
            onChange={(e) => {
              setResults({ ...results, gender: e.target.value });
              setErrors({ ...errors, gender: [''] });
            }}
            checked={results.gender === 'cits'}
          />
        </div>
      </div>

      {showErrors && errors.gender.map((error) => (
        <p key={error} className="help-block">{error}</p>
      ))}

      <div className="buttons">
        <button
          className="btn btn-secondary"
          onClick={() => passData(getPresetData(), -1)}
        >
          Atgriezties
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!errors.firstName[0] && !errors.lastName[0] && !errors.gender[0]) {
              return passData({ ...results }, 1);
            } setShowErrors(true);
            return null;
          }}
        >
          Turpināt
        </button>
      </div>
    </div>
  );
};

export default QuestionOne;
