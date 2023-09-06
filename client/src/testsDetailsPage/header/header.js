import useStore from "../../store";
function Header() {
    return (
        <header>
            <h1>Tests details</h1>
            <button onClick={()=>{window.location.href = 'http://localhost:3000';}}>Cancel</button>
        </header>
    )
}
export default Header;