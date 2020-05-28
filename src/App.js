
import React, { Suspense } from 'react';
import MainNav from './components/MainNav';

function App() {
  return (
    <>
      <Suspense fallback={(<div>Loading</div>)}>
        <MainNav />
      </Suspense>
    </>
  );
}

export default App;
