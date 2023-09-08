import { useEffect, useState } from "react";
import useStore from "../../store";
import { checkTokenExpire } from "../../helpers";

const clientUrl = process.env.REACT_APP_CLIENT_URL;

function StartPageHeader() {
    const { userInfo, setMessage, setLoading } = useStore();
    const [isShowPanel, setIsShowPanel] = useState(false);
    useEffect(() => {

    }, [])
    async function createTestButtonHandler() {
        const token = localStorage.getItem('token');
        setLoading(true);
        let data = await checkTokenExpire(token);
        setLoading(false);
        if (data.message === 'Yes') {
            window.location.href = `${clientUrl}testCreate`;
        } else {
            localStorage.removeItem('token');
            setMessage('Authorization has expired, you need to log in again');
            window.location.href = `${clientUrl}`;
        }
    }
    async function testsDetailsbuttonHandler() {
        const token = localStorage.getItem('token');
        setLoading(true);
        let data = await checkTokenExpire(token);
        setLoading(false);
        if (data.message === 'Yes') {
            window.location.href = `${clientUrl}testsDetails/`;
        } else {
            localStorage.removeItem('token');
            setMessage('Authorization has expired, you need to log in again');
            window.location.href = `${clientUrl}`;
        }
    }
    function logOut() {
        localStorage.removeItem('token');
        window.location.href = `${clientUrl}`;
    }
    return (
        <header>
            <h1>Test service</h1>
            {userInfo === null ? <a href={`${clientUrl}login`}>Log in</a> : <>
                <button onClick={createTestButtonHandler}>Create test</button>
                <button onClick={testsDetailsbuttonHandler}>Check my tests</button>
                <button onClick={logOut}>Log out</button>
                <p>Hello {userInfo.login}</p>

                <button className="burgerButton" onClick={() => { setIsShowPanel(true) }}>&#9776;</button>
                <div className={`hidedPanel${isShowPanel}`}>
                    <button onClick={createTestButtonHandler}>Create test</button>
                    <button onClick={testsDetailsbuttonHandler}>Check my tests</button>
                    <button onClick={logOut}>Log out</button>
                    <button onClick={() => { setIsShowPanel(false) }}>&#10799;</button>
                </div>
            </>}
        </header>
    )
}
export default StartPageHeader;