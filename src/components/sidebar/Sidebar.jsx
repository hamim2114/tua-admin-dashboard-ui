import './sidebar.scss';
import { useState } from 'react';
import sidebarData from '../../configs/sidebarData';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const closeSideBar = () => {
        document.querySelector('.main_content').style.transform =
            'scale(1) translateX(0)';
        setTimeout(() => {
            document.body.classList.remove('sidebar-open');
            document.querySelector('.main_content').style = '';
        }, 500);
    };
    return (
        <div className='sidebar'>
            <div className='sidebar_logo'>
                <img src='logo.svg' alt='' />
                <div className='sidebar_close' onClick={closeSideBar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className='sidebar_menu'>
                {sidebarData.map((nav, index) => (
                    <Link
                        to={nav.link}
                        key={`nav-${index}`}
                        className={`sidebar_menu_item ${
                            activeIndex === index && 'active'
                        }`}
                        onClick={() => {
                            setActiveIndex(index);
                            closeSideBar();
                        }}>
                        <div className='sidebar_menu_item_icon'>{nav.icon}</div>
                        <div className='sidebar_menu_item_txt'>{nav.text}</div>
                    </Link>
                ))}
                <div className='sidebar_menu_item'>
                    <div className='sidebar_menu_item_icon'>
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className='sidebar_menu_item_txt'>Logout</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
