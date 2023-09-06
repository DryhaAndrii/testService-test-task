import { useEffect } from 'react';
import './createTestPage.scss';
import CreateTestPageHeader from './header/createTestPageHeader';
import useStore from '../store';
import TestCreating from './testCreating/testCreating';

function CreateTestPage() {
    const { userInfo } = useStore();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = 'http://localhost:3000';
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