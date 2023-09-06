import Test from "./test";

function Tests({ tests }) {

    return (
        <div className="tests">
            {tests.length>0?tests.map((test, index) => (
                <Test key={index} test={test} />
            )):<h1>You have not created any test yet</h1>}
        </div>
    )
}
export default Tests;