function Result({ result }) {
    return (
        <div className="result">
            <p>User Login: {result.userLogin}</p>
            <p>Score: {result.score}</p>
            <p>Elapsed Time: {result.elapsedTime} seconds</p>
            <p>Date: {new Date(result.date).toLocaleString()}</p>
        </div>
    )
}
export default Result;