import { useState } from 'react';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
