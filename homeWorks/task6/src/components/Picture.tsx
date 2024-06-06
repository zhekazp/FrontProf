// import { useState } from "react";

interface IProps{
  title: string, 
  setUrl(index:number):void,
  index: number

}
export default function Picture(props: IProps) {
  // const [color, setColor] = useState<boolean>(false);
  return (
    <div className='picture'
    //  onClick={()=>{setColor(true); props.setUrl(props.index);}}
     >
        {props.title}
    </div>
  );
}
