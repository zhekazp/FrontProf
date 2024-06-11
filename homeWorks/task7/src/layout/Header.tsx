import Navigation from "../components/Navigation";
// import { FC } from "react";

//const Header: FC<{ setPage: (newValue: string) => void }> = (props) => {
// function   Header(props:{setPage: {(newPage: string):void}
//  }){
function Header() {
  return (
    <header>
      {/* <Navigation setPage={props.setPage} /> */}
      <Navigation />
    </header>
  );
}

export default Header;
