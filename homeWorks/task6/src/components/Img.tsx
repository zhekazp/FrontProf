export default function Img(props: { url: string, showPic(): void }) {
  
    return (
      <img src={props.url} 
      alt="current image" 
      onLoad={() => props.showPic()}/>
  );
}
