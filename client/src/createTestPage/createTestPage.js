import { useEffect } from 'react';
import './createTestPage.scss';
import CreateTestPageHeader from './header/createTestPageHeader';
import TestCreating from './testCreating/testCreating';

const clientUrl = process.env.REACT_APP_CLIENT_URL;

function CreateTestPage() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = `${clientUrl}`;
        }
    }, [])

    return (
        <div className='createTestPage'>
            <CreateTestPageHeader />
            <TestCreating />
        </div>
    )
}
export default CreateTestPage;