import { ResultType } from '../data/data';

type QuestionProps = {
    data: ResultType,
    passData: (results: ResultType, page: number) => void,
  }

const Home = ({ data, passData }: QuestionProps) => (
  <div>
    <h2 className="h2">Piesakies Kredītam!</h2>
    <button className="btn btn-primary" onClick={() => passData({ ...data }, 1)}>Pieteikties</button>
  </div>
);

export default Home;
