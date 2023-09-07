const clientUrl = process.env.REACT_APP_CLIENT_URL;
function TestPassingHeader({testName}) {
    return (
        <header>
            <h1>{testName}</h1>
            <button onClick={()=>{window.location.href = `${clientUrl}`}}>Cancel</button>
        </header>
    )
}
export default TestPassingHeader;