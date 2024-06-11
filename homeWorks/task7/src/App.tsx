
import { createContext, useState } from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'

export const PageContext=createContext<((newValue: number)=> void) | null>(null);

function App() {

  const [page, setPage] = useState(0);
  
  return (
    <>
    <PageContext.Provider value={setPage}>
    <Header/>
    <Main page={page}/>
    </PageContext.Provider>
    <Footer/>
    </>
  )
}

export default App


