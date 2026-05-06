import { createContext, useState } from "react";
import Compo2 from "../Compo2";
//Context ApI
export const UserContext = createContext();

function Compo1() {
    // let name = "Sara";

    const [name, setName] = useState("");
    const [input, setInput] = useState('');
    function updateName() {
        if (input.trim() === "") return;

        setName(input);
        setInput("")

    }

    return (
        <div>
            <h1>hellow parent</h1>
            <UserContext.Provider value={name}>
                <Compo2 />
            </UserContext.Provider>

            <input type="text" placeholder="ente name"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={updateName}>send</button>
            <div>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="enter your name" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Email</label>
                        <input type="text" placeholder="enter your emial" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="enter your password" />
                    </div>
                    <button >sing up</button>
                </form>
            </div>
        </div>
    );

}
export default Compo1