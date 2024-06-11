import { friends } from "../util/components";

import Friend from "./Friend";

export default function DreamTeam(){
  return(
        <section className="right">
        <h2>Dream Team</h2>
        {friends.map((item,index)=> (<Friend key={'team'+index} src={item.src} name={item.name}/>)
        )}
      </section>
    );
}