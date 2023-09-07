import './startPage.scss';
import StartPageHeader from './header/header';
import Tests from './tests/tests';

function StartPage() {

    return (
        <div className='startPage'>
            <StartPageHeader />
            <Tests />
        </div>
    )
}
export default StartPage;