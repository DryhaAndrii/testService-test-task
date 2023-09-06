import { useEffect, useState } from "react";
import { getTests } from "../../helpers";
import useStore from "../../store";
import Test from "./test/test";
function Tests() {
    const { setLoading } = useStore();
    const [ tests, setTests ] = useState([]);
    useEffect(() => {
        fetchTests();
    }, []);
    async function fetchTests() {
        setLoading(true);
        const tests = await getTests();
        setLoading(false);
        setTests(tests);
    }
    return (
        <div className="tests">
            {tests.map((test, index) => (
                <Test key={index} test={test} />
            ))}
        </div>
    )
}
export default Tests;