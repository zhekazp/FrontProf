import { useContext } from "react";
import { navigation, urls } from "../util/components";
import { PageContext } from "../App";
//  import { FC } from "react";

//const Navigation: FC<{ setPage: (newValue: string) => void }> = (props) => {
//function   Navigation(props:{setPage: {(newPage: string):void}}){
function Navigation() {
  const change = useContext(PageContext);
  const changePage = (page: number) => {
    console.log(page, navigation[page]);
    
    history.pushState({page:page}, navigation[page], `/${urls[page]}`);
    change!.setPage(page);
  }

  return (
    <nav>
      <ul>
        {navigation.map((item, index) => (
          <li
            key={"nav" + index}
            onClick={() => changePage(index)}
            className="commonButton"
          >
            {item}
          </li>
        ))}
      </ul>
      <a className="backButton" href="../../../">Back to tasks</a>
    </nav>
  );
}

export default Navigation;
