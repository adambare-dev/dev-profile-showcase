import { useContext } from "react";
import { UserContext } from "./assets/Compo1";

function Compo3() {
    const userName = useContext(UserContext);
    return (
        <div>
            <h2>iam compo 3</h2>
            <p>user Name: {userName}</p>

        </div>
    )
}
export default Compo3;