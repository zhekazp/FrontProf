
import { createContext, useEffect, useState } from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import { urls } from "../src/util/components"

interface IPages{
  page:number;
  setPage:(newValue: number)=> void

}
export const PageContext=createContext<IPages | null>(null);

function App() {

  const [page, setPage] = useState(0);

  useEffect(()=>{
    window.addEventListener('popstate', function(){
      setPage(urls.indexOf(location.pathname.slice(1)));  
    });
    setPage(urls.indexOf(location.pathname.slice(1)));
  },
[]
  );
  
  return (
    <>
    <PageContext.Provider value={{page, setPage}}>
    <Header/>
    <Main />
    </PageContext.Provider>
    <Footer/>
    </>
  )
}

export default App


