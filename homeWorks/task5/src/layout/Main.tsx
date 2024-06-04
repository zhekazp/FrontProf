import { Tasks } from "../components/Tasks";
import { UserList } from '../components/UserList';
import { useState } from "react";

function Main() {

    const [page, setPage] = useState<string>("userList");
    const [userId, setUId] = useState<number>(0);

    const changePage = (id : number) => {
        page === "userList" ? setPage("Tasks") : setPage("userList");
        setUId(id);
    }

    return (
        <main className="mainBlock">
            <div className="info">
                <h3>Task MANAGER</h3>
                {page === "userList" ?
                    <UserList changePage={changePage} /> :
                    <Tasks userId={userId} changePage={changePage} />
                }
            </div>

        </main>
    );
}

export { Main }