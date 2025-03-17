import { useSelector } from 'react-redux';
import 'styles/App.scss';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useSelector((state: any) => state.counter.value);
  console.log({ count });
  return <div>portfolio appss</div>;
}

export default App;
