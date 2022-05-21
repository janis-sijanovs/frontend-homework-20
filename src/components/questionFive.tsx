/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useRef, useState } from 'react';
import { ResultType } from '../data/data';

type QuestionProps = {
    data: ResultType,
    passData: (results: ResultType, page: number) => void,
  }

const QuestionFive = ({ data, passData }: QuestionProps) => {
  const [results, setResults] = useState(data);
  const [sum, setSum] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState('');

  const rangeReference = useRef<HTMLInputElement | null>(null);

  const rangeHandler = () => {
    if (rangeReference.current) {
      return rangeReference.current.value;
    }
    return null;
  };

  useEffect(() => {
    setSum(results.sum);
    if (results.sum === 0) {
      setErrors('Value Cannot be 0');
    }
  }, []);

  return (
    <div>

      <h2 className="h2">Piektais Solis</h2>
      <div className="imput-group">
        <div className="slider-group">
          <label htmlFor="sum">Izvēlieties kredīta daudzumu:</label>
          <input
            className="slider"
            type="range"
            min="0"
            max={results.loanType === 'hipotek' ? '200000' : '2000'}
            defaultValue={+results.sum}
            id="sum"
            name="sum"
            ref={rangeReference}
            onChange={(e) => {
              setSum(+e.target.value);
              if (+e.target.value === 0) {
                setErrors('Jāizvēlas vairāk par 0!');
              } else {
                setErrors('');
                setResults({ ...results, sum });
              }
            }}
          />
        </div>
        <p>
          {rangeHandler()}
          €
        </p>
        {showErrors && <p className="error">{errors}</p>}
      </div>

      <div className="buttons">
        <button
          className="btn btn-secondary"
          onClick={() => passData({ ...results, sum }, -1)}
        >
          Atpakaļ
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!errors) {
              return passData({ ...results, sum }, 1);
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

export default QuestionFive;
