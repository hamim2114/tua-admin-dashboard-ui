import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Topnav from '../components/topnav/Topnav'

const Mainlayout = () => {
  return (
    <>
        <Sidebar/>
        <div className="main">
            <div className="main_content">
                <Topnav/>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Mainlayout