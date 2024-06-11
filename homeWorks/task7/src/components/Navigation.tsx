import { useContext } from "react";
import { navigation, urls } from "../util/components";
import { PageContext } from "../App";
//  import { FC } from "react";

//const Navigation: FC<{ setPage: (newValue: string) => void }> = (props) => {
//function   Navigation(props:{setPage: {(newPage: string):void}}){
function Navigation() {
  const change = useContext(PageContext);
  const changePage = (page: number) => {
    history.pushState(null, navigation[page], `/${urls[page]}`);
    change!(page);
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
