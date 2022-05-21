/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useState } from 'react';
import { ResultType } from '../data/data';

type QuestionProps = {
    data: ResultType,
    passData: (results: ResultType, page: number) => void,
  }

const QuestionFour = ({ data, passData }: QuestionProps) => {
  const [results, setResults] = useState(data);
  const [explanation, setExplanation] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    setExplanation(results.explanation);
    if (results.explanation === '') {
      setErrors('Nepieciešams ievadīt datus!');
    }
  }, []);

  return (
    <div>
      <h2 className="h2">Ceturtais Solis</h2>

      <label htmlFor="explanation">Pastāstiet, kādam nolūkam vēlaties ņemt kredītu:</label>
      <textarea
        className="form-control"
        id="explanation"
        name="explanation"
        value={explanation}
        onChange={(e) => {
          setExplanation(e.target.value);
          if (e.target.value.length < 16) {
            setErrors('Paskaidrojumam jābūt vismaz 16 simbolus garam!');
          } else if (e.target.value.length < 1) {
            setErrors('Nepieciešams ievadīt datus!');
          } else {
            setErrors('');
            setResults({ ...results, explanation: e.target.value });
          }
        }}
      />
      {showErrors && <p className="help-block">{errors}</p>}

      <div className="buttons">
        <button
          className="btn btn-secondary"
          onClick={() => passData({ ...results, explanation }, -1)}
        >
          Atpakaļ
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!errors) {
              return passData({ ...results, explanation }, 1);
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

export default QuestionFour;
