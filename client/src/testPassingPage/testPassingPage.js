import { useParams } from 'react-router-dom';
import { getTestById } from '../helpers';
import { useEffect, useState } from 'react';
import useStore from '../store';
import Test from './test/test';
import './testPassingPage.scss';
import TestPassingHeader from './header/testPassingHeader';

function TestPassingPage() {
    const { setLoading} = useStore();
    const { id } = useParams(); 
    const [test, setTest] = useState({});
    useEffect(() => {
        fetchTest();
    }, [])
    async function fetchTest() {
        setLoading(true);
        const test = await getTestById(id);
        console.log(test);
        setLoading(false);
        setTest(test);
    }
    return (
        <div className="testPassingPage">
            <TestPassingHeader testName={test.testName}/>
            <Test test={test} id={id} />
        </div>
    )
}
export default TestPassingPage;