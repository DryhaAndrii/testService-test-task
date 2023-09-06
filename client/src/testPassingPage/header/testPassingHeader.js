
function TestPassingHeader({testName}) {
    return (
        <header>
            <h1>{testName}</h1>
            <button onClick={()=>{window.location.href = 'http://localhost:3000';}}>Cancel</button>
        </header>
    )
}
export default TestPassingHeader;