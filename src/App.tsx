import {
  useState,
} from 'react';
import QuestionFive from './components/questionFive';
import QuestionFour from './components/questionFour';
import QuestionOne from './components/questionOne';
import QuestionResults from './components/questionResults';
import QuestionThree from './components/questionThree';
import QuestionTwo from './components/questionTwo';
import { getPresetData, ResultType } from './data/data';
import './App.scss';
import Home from './components/home';
import logo from './swedbank-logo.svg';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState<ResultType>(getPresetData());

  const recieveResults = (data: ResultType, newPage: number) => {
    setResults({ ...data });
    setCurrentPage(currentPage + newPage);
  };

  return (

    <div className="app">
      <header className="page-header">
        <button
          className="logo"
          onClick={() => {
            setResults(getPresetData());
            setCurrentPage(0);
          }}
        >
          <img src={logo} width="200" alt="" />
        </button>
      </header>
      <div className="form">
        {{
          0: <Home data={results} passData={recieveResults} />,
          1: <QuestionOne data={results} passData={recieveResults} />,
          2: <QuestionTwo data={results} passData={recieveResults} />,
          3: <QuestionThree data={results} passData={recieveResults} />,
          4: <QuestionFour data={results} passData={recieveResults} />,
          5: <QuestionFive data={results} passData={recieveResults} />,
          6: <QuestionResults data={results} passData={recieveResults} />,
        }[currentPage]}
      </div>
    </div>
  );
};

export default App;
