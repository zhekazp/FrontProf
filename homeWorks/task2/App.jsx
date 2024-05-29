const root = ReactDOM.createRoot(document.getElementById("root"));

const Champions = (props) => {
    const { name,
        img,
        years
    } = props;
    return (
        <div className="card">
            <img className="photo" src={img} alt="photo of champion" />
            <p>{name}</p>
            <p>{years}</p>
        </div>
    );
}

root.render(
    <>
        <header className="header">
            <a href="./"><span className="headerText">Frontend PROF</span></a>
        </header>
        <main className="mainBlock">
            <div>
                <h3>Cheese champions</h3>
            </div>
            <div className="championsBlock">
                <Champions years="1993—1999" name="Anatoly Karpov" img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Interpolis_Schaaktoernooi_Karpov%2C_close%2C_Bestanddeelnr_933-7978.jpg/150px-Interpolis_Schaaktoernooi_Karpov%2C_close%2C_Bestanddeelnr_933-7978.jpg" />
                <Champions years="1999—2000" name="Alexander Khalifman" img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Khalifman%2CAlexander_2000_Porz.jpg/150px-Khalifman%2CAlexander_2000_Porz.jpg" />
                <Champions years="2000—2002" name="Viswanathan Anand" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Viswanathan_Anand_%28cropped%29.jpg/150px-Viswanathan_Anand_%28cropped%29.jpg" />
                <Champions years="2002—2004" name="Ruslan Ponomariov" img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ponomariov_2010_Dortmund.jpg/150px-Ponomariov_2010_Dortmund.jpg" />
                <Champions years="2004—2005" name="Rustam Kasimdzhanov" img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kasimdhzanov_Torino_2006.JPG/150px-Kasimdhzanov_Torino_2006.JPG" />
                <Champions years="2005—2006" name="Veselin Topalov" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Veselin_Topalov_2013.jpg/150px-Veselin_Topalov_2013.jpg" />
                <Champions years="2006—2007" name="Vladimir Kramnik" img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Kramnik_2007_Dortmund.jpg/225px-Kramnik_2007_Dortmund.jpg" />
                <Champions years="2007—2013" name="Viswanathan Anand" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Viswanathan_Anand_%28cropped%29.jpg/150px-Viswanathan_Anand_%28cropped%29.jpg" />
                <Champions years="2013—2023" name="Magnus Carlsen" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Magnus_Carlsen_%282012%29_cropped.jpg/225px-Magnus_Carlsen_%282012%29_cropped.jpg" />
                <Champions years="2023—н.в." name="Ding Liren" img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ding_Liren_in_2023_%28cropped%29.jpg/225px-Ding_Liren_in_2023_%28cropped%29.jpg" />
            </div>
        </main>
        <footer className="footer">
            <h2 id="footer">{new Date().getFullYear()}</h2>
        </footer>
    </>
);