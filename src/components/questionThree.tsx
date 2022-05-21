/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect, useState } from 'react';
import { ResultType } from '../data/data';

type QuestionProps = {
    data: ResultType,
    passData: (results: ResultType, page: number) => void,
  }

const QuestionThree = ({ data, passData }: QuestionProps) => {
  const [results, setResults] = useState(data);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (results.loanType === '') {
      setErrors('Nepieciešams izvēlēties!');
    }
  }, []);

  return (
    <div>
      <h2 className="h2">Trešais Solis</h2>

      <div className="input-group">
        <label htmlFor="loanType">Kredīta veids:</label>
        <select
          className="form-control select"
          name="loanType"
          id="loanType"
          defaultValue={results.loanType}
          onChange={(e) => {
            setResults({ ...results, loanType: e.target.options[e.target.options.selectedIndex].value });
            setErrors('');
          }}
        >
          <option value="" disabled>Izvēlieties Kredīta veidu</option>
          <option value="patēriņš">Patēriņa kredīts</option>
          <option value="mazmāj">Mazais mājokļa kredīts</option>
          <option value="hipotek">Hipotekārais kredīts</option>
          <option value="saules">Saules paneļu kredīts</option>
          <option value="studiju">Studiju kredīts</option>
        </select>
        {showErrors && <p className="help-block">{errors}</p>}
      </div>

      <div className="buttons">
        <button
          className="btn btn-secondary"
          onClick={() => passData({ ...results }, -1)}
        >
          Atpakaļ
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!errors) {
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

export default QuestionThree;
