
                  
export default function  Friend({src, name}:{src:string, name:string}){
  let classEl=""; 
  if (name === "friend7") {
    classEl="bottomLeft";
   } else if(name === "friend9"){
    classEl="bottomRight";
   }
    return <img className={classEl} src={src} alt={name} />
}