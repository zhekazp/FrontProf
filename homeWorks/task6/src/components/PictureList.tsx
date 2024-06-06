import { useState, useEffect } from "react";
import Picture from "./Picture";
import Img from "./Img";
import { Preloader } from "./Preloader";

interface IPicture {
  title: string;
  thumbnailUrl: string;
}
export default function PictureList() {
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const [img, setImg] = useState<string>("");
  const [preloader, setPreloader] = useState<boolean>(true);
  

  useEffect(() => {
    const loadPictures = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await result.json();
      setPictures(data.slice(0, 15));
    };
    loadPictures();
  }, []);

  const setUrl = (index: number) => {
    setPreloader(false);
    setImg(pictures[index].thumbnailUrl);
  };

  const showPic = () => {
    setPreloader(true);
  };

  return (
    <>
      <div className="pictures">
        {pictures.map((item, index) => (
          <div onClick={() => setUrl(index)} key={index}>
            <Picture title={item.title} index={index} setUrl={setUrl} />
          </div>
        ))}
      </div>
      <div className="pic">
        {!preloader ? <Preloader /> : <></>}
        {img !== "" ? <Img showPic={showPic} url={img} /> : <></>}
      </div>
    
    </>
  );
}
