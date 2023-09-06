import './startPage.scss';
import useStore from '../store';
import StartPageHeader from './header/header';
import Tests from './tests/tests';

function StartPage() {
    const { userInfo } = useStore();

    return (
        <div className='startPage'>
            <StartPageHeader />
            <Tests />
        </div>
    )
}
export default StartPage;