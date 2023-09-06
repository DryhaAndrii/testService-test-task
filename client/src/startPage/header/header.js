import { useEffect } from "react";
import useStore from "../../store";
import { checkTokenExpire } from "../../helpers";

function StartPageHeader() {
    const { userInfo, setMessage, setLoading } = useStore();
    useEffect(() => {

    }, [])
    async function createTestButtonHandler() {
        const token = localStorage.getItem('token');
        setLoading(true);
        let data = await checkTokenExpire(token);
        setLoading(false);
        if (data.message === 'Yes') {
            window.location.href = 'http://localhost:3000/testCreate';
        } else {
            localStorage.removeItem('token');
            setMessage('Authorization has expired, you need to log in again');
            window.location.href = 'http://localhost:3000';
        }
    }
    async function testsDetailsbuttonHandler() {
        const token = localStorage.getItem('token');
        setLoading(true);
        let data = await checkTokenExpire(token);
        setLoading(false);
        if (data.message === 'Yes') {
            window.location.href = 'http://localhost:3000/testsDetails/';
        } else {
            localStorage.removeItem('token');
            setMessage('Authorization has expired, you need to log in again');
            window.location.href = 'http://localhost:3000';
        }
    }
    function logOut() {
        localStorage.removeItem('token');
        window.location.href = 'http://localhost:3000';
    }
    return (
        <header>
            <h1>Test service</h1>
            {userInfo === null ? <a href="http://localhost:3000/login">Log in</a> : <>
                <button onClick={createTestButtonHandler}>Create test</button>
                <button onClick={testsDetailsbuttonHandler}>Check my tests</button>
                <button onClick={logOut}>Log out</button>
                <p>Hello {userInfo.login}</p>
            </>}
        </header>
    )
}
export default StartPageHeader;