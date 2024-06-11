import { useContext } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import Home from "../components/Home";
import { StarW } from "../components/StarW";
import { PageContext } from "../App";
import { Error } from "../components/Error";


export default function Main(){
   const page= useContext(PageContext);
    const pages = (page : number)=>{
        switch(page){
            case 0:
                return(<Home/>);
             case 1:
                return(<About/>);
            case 2:
                return(<StarW/>);
            case 3:
                return(<Contact/>);
            default:
                return(<Error />);
        }
    }
    return(
    <main className="mainBlock">
        {pages(page!.page)}
    </main>
    )
}