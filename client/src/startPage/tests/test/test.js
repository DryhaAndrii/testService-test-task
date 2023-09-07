const clientUrl = process.env.REACT_APP_CLIENT_URL;
function Test({ test }) {

    function clickHandler() {
        window.location.href = `${clientUrl}test/${test._id}`;
    }

    return (
        <div onClick={clickHandler} className="test">
            <div className="left">
                <h2>{test.testName}</h2>
                <p>Автор: {test.authorName}</p>
            </div>
            <div className="right">
                <p>{test.description}</p>
            </div>
        </div>
    )
}
export default Test;