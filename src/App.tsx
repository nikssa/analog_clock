import { Suspense, lazy } from 'react';

// import Clock from './components/Clock';
import LoadingClock from './components/LoadingClock';
import Stopwatch from './components/Stopwatch';

import './assets/scss/main.scss';
import Loading from './components/Loading';

const Clock = lazy(() => import('./components/Clock'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='clocks'>
        <Clock city='Belgrade' timeDifference={2} />
        <Clock city='London' timeDifference={1} />
        <Clock city='New York' timeDifference={-4} />
        <Clock city='Los Angeles' timeDifference={-7} />
        <Clock city='Moscow' timeDifference={3} />
        <Clock city='Tokio' timeDifference={9} />
      </div>
    </Suspense>
  );
}

export default App;
