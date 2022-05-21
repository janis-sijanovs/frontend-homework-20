/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useState } from 'react';
import { ResultType } from '../data/data';

type QuestionProps = {
    data: ResultType,
    passData: (results: ResultType, page: number) => void,
  }

const QuestionTwo = ({ data, passData }: QuestionProps) => {
  const [results, setResults] = useState(data);
  const [hasActiveLoan, setHasActiveLoan] = useState(false);

  useEffect(() => {
    setHasActiveLoan(results.hasActiveLoan);
  }, []);

  return (
    <div>
      <h2 className="h2">Otrais Solis</h2>
      <div className="inline-input">
        <input
          className="checkbox"
          type="checkbox"
          id="hasLoan"
          name="hasLoan"
          checked={hasActiveLoan}
          onChange={(e) => {
            setHasActiveLoan(e.target.checked);
          }}
        />
        <label htmlFor="hasLoan">Vai jums pašlaik ir aktīvas kredītsaistības?</label>
      </div>

      <div className="buttons">
        <button
          className="btn btn-secondary"
          onClick={() => passData({ ...results, hasActiveLoan }, -1)}
        >
          Atpakaļ
        </button>
        <button
          className="btn btn-primary"
          onClick={() => passData({ ...results, hasActiveLoan }, 1)}
        >
          Turpināt
        </button>
      </div>
    </div>
  );
};

export default QuestionTwo;
