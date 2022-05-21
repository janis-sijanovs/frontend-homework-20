/* eslint-disable jsx-a11y/label-has-associated-control */

import { ResultType } from '../data/data';

type QuestionProps = {
  data: ResultType,
  passData: (results: ResultType, page: number) => void,
}

const fullCreditType = (shortenedType: string) => {
  switch (shortenedType) {
    case 'mazmāj':
      return 'Mazais mājokļa kredīts';

    case 'hipotek':
      return 'Hipotekārais kredīts';

    case 'saules':
      return 'Saules paneļu kredīts';

    case 'studiju':
      return 'Studiju kredīts';

    default:
      return 'Patēriņa kredīts';
  }
};

const QuestionResults = ({ data, passData }: QuestionProps) => (
  <form>
    <input type="text" className="hidden" value={data.firstName} readOnly />
    <input type="text" className="hidden" value={data.lastName} readOnly />
    <input type="text" className="hidden" value={data.gender} readOnly />
    <input type="text" className="hidden" value={data.hasActiveLoan ? 'True' : 'False'} readOnly />
    <input type="text" className="hidden" value={data.loanType} readOnly />
    <input type="text" className="hidden" value={data.explanation} readOnly />
    <input type="text" className="hidden" value={data.sum.toString()} readOnly />

    <h2 className="h2">Jūsu Dati:</h2>
    <div className="input-group">
      <div className="list">
        <p className="list-item">
          <span className="result-category">Vārds:&nbsp;</span>
          {data.firstName}
        </p>
        <p className="list-item">
          <span className="result-category">Uzvrds:&nbsp;</span>
          {data.lastName}
        </p>
        <p className="list-item">
          <span className="result-category">Dzimums:&nbsp;</span>
          {data.gender}
        </p>
      </div>
      <div className="list">
        <p className="list-item">
          <span className="result-category">Ir aktīvas kredītsaistības:&nbsp;</span>
          {data.hasActiveLoan ? 'Jā' : 'Nē'}
        </p>
        <p className="list-item">
          <span className="result-category">Kredīta veids:&nbsp;</span>
          {fullCreditType(data.loanType)}
        </p>
        <p className="list-item">
          <span className="result-category">Kredīta mērķis:&nbsp;</span>
          {data.explanation}
        </p>
        <p className="list-item">
          <span className="result-category">Kredīta vērtība:&nbsp;</span>
          {`${data.sum}€`}
        </p>
      </div>
    </div>
    <div className="buttons">
      <button
        className="btn btn-secondary"
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          e.preventDefault;
          passData({ ...data }, -1);
        }}
      >
        Mainīt
      </button>
      <button className="btn btn-primary">
        Apstiprināt
      </button>
    </div>
  </form>
);

export default QuestionResults;
