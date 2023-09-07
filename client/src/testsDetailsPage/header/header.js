const clientUrl = process.env.REACT_APP_CLIENT_URL;
function Header() {
    return (
        <header>
            <h1>Tests details</h1>
            <button onClick={()=>{window.location.href = `${clientUrl}`}}>Cancel</button>
        </header>
    )
}
export default Header;