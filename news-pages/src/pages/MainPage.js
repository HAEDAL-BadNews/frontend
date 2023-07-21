import Sidebar from '../components/Sidebar';
import CategoriesResult from './components/Contents/CategoriesResult';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="MainPage">
            <form>
                <Sidebar />
                <CategoriesResult />
            </form>
        </div>
    );
};

export default MainPage;
