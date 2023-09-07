import './App.scss';
import AuthPage from './authPage/authPage';
import Message from './message/message';
import StartPage from './startPage/startPage';
import useStore from './store';
import { useEffect } from 'react';
import { getUserInfoWithToken } from './helpers';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './loading/loading';
import CreateTestPage from './createTestPage/createTestPage';
import TestPassingPage from './testPassingPage/testPassingPage';
import TestsDetailsPage from './testsDetailsPage/testsDetailsPage';
import TestDetails from './testDetails/testDetails';

const clientUrl = process.env.REACT_APP_CLIENT_URL;
const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const { message, loading, setMessage, setUserInfo, setLoading } = useStore();
  useEffect(() => {
    console.log(clientUrl, apiUrl);
    getUserData();

  }, [])
  async function getUserData() {
    const token = localStorage.getItem('token');
    setLoading(true);
    const info = await getUserInfoWithToken(token);
    setLoading(false);
    if (info.message === 'Token is not exist') {
      console.log(info.message);
    } else if (info.message === 'Token is not valid') {
      setMessage('Authorization has expired, you need to log in again');
      window.location.href = `${clientUrl}`;
      localStorage.removeItem('token');
    } else {
      setUserInfo(info);
    }
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/testCreate" element={<CreateTestPage />} />
          <Route path="/test/:id" element={<TestPassingPage />} />
          <Route path="/testsDetails" element={<TestsDetailsPage />} />
          <Route path="/testDetails/:id" element={<TestDetails />} />
        </Routes>
      </Router>
      {message.length > 0 ? <Message /> : <></>}
      {loading ? <Loading /> : <></>}
    </div>
  );
}

export default App;
