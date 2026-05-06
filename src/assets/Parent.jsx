import { createContext } from "react";
import Child from "./Child";
export const Email = createContext();
export const Name = createContext();



function Parent() {
    const userName = "John doe";
    const userEmail = "adam@gmail.com";

    return (
        <div style={{
            border: '1px solid',
            width: "20rem",
            padding: "1rem",
            borderRadius: ".5rem"
        }}>
            <h2 style={{
                backgroundColor: "#0077cc",
                textAlign: "center",
                padding: '.8rem'
            }}>props drilling</h2>
            <hr />
            <h3>hello ✋ iam parent</h3>
            <Email.Provider value={userEmail}>
                <Name.Provider value={userName}>
                    <Child />
                </Name.Provider>
            </Email.Provider>


        </div>


    );
}
export default Parent