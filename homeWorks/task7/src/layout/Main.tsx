import { About } from "../components/About";
import { Contact } from "../components/Contact";
import Home from "../components/Home";
import { StarW } from "../components/StarW";


export default function Main(props:{page:number}){
    const pages = (page : number)=>{
        switch(page){
            case 0:
                return(<Home/>);
            break;
            case 1:
                return(<About/>);
            break;
            case 2:
                return(<StarW/>);
            break;
            case 3:
                return(<Contact/>);
            break;

        }
    }
    return(
    <main className="mainBlock">
        {pages(props.page)}
    </main>
    )
}