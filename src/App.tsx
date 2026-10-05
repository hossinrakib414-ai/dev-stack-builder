import Navbar from './component/Navbar';
import MainSection from './component/MainSection';
import { Suspense } from 'react';
import type { TTask } from './types/task';

const fetherFn = async (): Promise<TTask[]> => {
  const res = await fetch('/data.json');
  const promise = res.json();
  return promise;
};

function App() {
  const taskPromise = fetherFn();
  return (
    <>
      <div>
        <Navbar></Navbar>

        <Suspense
          fallback={
            <span className="loading loading-spinner text-error"></span>
          }
        >
          <MainSection taskPromise={taskPromise}></MainSection>
        </Suspense>
      </div>
    </>
  );
}

export default App;
