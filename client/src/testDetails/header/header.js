import useStore from "../../store";
const clientUrl = process.env.REACT_APP_CLIENT_URL;
function Header({ testName, toogleResult }) {
    const { userInfo } = useStore();
    return (
        <header>
            <h1>{testName}</h1>
            <button onClick={toogleResult}>Toogle results</button>
            <button onClick={() => { window.location.href = `${clientUrl}testsDetails/` }}>Cancel</button>
        </header>
    )
}
export default Header;