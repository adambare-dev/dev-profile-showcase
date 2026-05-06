
import GranChild from "./GrandChild";
function Child() {
    return (
        <div style={{
            border: '1px solid',
            padding: "1rem",
            borderRadius: ".5rem"
        }}>
            <h3>hey ✋ iam child</h3>
            <GranChild />
        </div>

    );
}
export default Child;