const clientUrl = process.env.REACT_APP_CLIENT_URL;
function Test({ test }) {

    function clickHandler() {
        window.location.href = `${clientUrl}test/${test._id}`;
    }

    return (
        <div onClick={clickHandler} className="test">
            <h2>{test.testName}</h2>
            <p>Автор: {test.authorName}</p>
        </div>
    )
}
export default Test;