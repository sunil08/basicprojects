import homeIcon from './home.png'
import serviceIcon from './services.png'
import infoIcon from './info.png'
export const sidebarData = [
    {
        title: " Home",
        icon: <img src={homeIcon} alt="home" className="sidebar-icon" width="16px" height="16px" />,
        path: "#home"
    },
    {
        title: " Services",
        icon: <img src={serviceIcon} alt="home" className="sidebar-icon" width="16px" height="16px" />,
        path: "#services"
    },
    {
        title: "About",
        icon: <img src={infoIcon} alt="home" className="sidebar-icon" width="16px" height="16px" />,
        path: "#about"
    }
]