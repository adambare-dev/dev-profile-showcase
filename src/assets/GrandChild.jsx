import { useContext } from "react";
import { UserContext } from "./Compo1";
import { Email } from "./Parent";
import { Name } from "./Parent";
function GranChild() {
    const email = useContext(Email);
    const name = useContext(Name);
    return (
        <div style={{
            border: '1px solid',
            padding: ".5rem",
            borderRadius: ".5rem",
        }}>
            <h3>hey ✋ iam Grand child</h3>
            <p>user eamil: {email}</p>
            <p>user name:{name}</p>
        </div>
    );
}
export default GranChild