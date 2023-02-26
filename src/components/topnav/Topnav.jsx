import data from '../../constants/data';
import Userinfo from '../user-info/Userinfo';
import './topnav.scss';

const Topnav = () => {
  const openSideBar = () => {
    document.body.classList.add('sidebar-open')
  }
    return (
        <div className='topnav'>
            <Userinfo data={data.user} />
            <div className='sidebar-toggle' onClick={openSideBar}>
                <i className='bx bx-menu-alt-right'></i>
            </div>
        </div>
    );
};

export default Topnav;
