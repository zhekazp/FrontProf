import PictureList from "../components/PictureList";

function Main() {

    return (
        <main className="mainBlock">
            <div className="info">
                <h3>Chose a picture</h3>
                <PictureList />
            </div>

        </main>
    );
}

export { Main }