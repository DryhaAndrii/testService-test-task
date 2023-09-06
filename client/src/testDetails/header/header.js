import useStore from "../../store";
function Header({ testName, toogleResult }) {
    const { userInfo } = useStore();
    return (
        <header>
            <h1>{testName}</h1>
            <button onClick={toogleResult}>Toogle results</button>
            <button onClick={() => { window.location.href = 'http://localhost:3000/testsDetails/'; }}>Cancel</button>
        </header>
    )
}
export default Header;