function Test({ test }) {
    function clickHandler() {
        window.location.href = `http://localhost:3000/testDetails/${test._id}`;
    }
    return (
        <div className="test" onClick={clickHandler}>
                <h2>{test.testName}</h2>
                <p>Автор: {test.authorName}</p>
        </div>
    )
}
export default Test;