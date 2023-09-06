
function Test({ test }) {

    function clickHandler() {
        window.location.href = `http://localhost:3000/test/${test._id}`;
    }

    return (
        <div onClick={clickHandler} className="test">
            <h2>{test.testName}</h2>
            <p>Автор: {test.authorName}</p>
        </div>
    )
}
export default Test;