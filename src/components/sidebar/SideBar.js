import './sidebar.css';

export default function SideBar() {
  return(
    <div className="sidebar">
        <div className="sideBarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
                src="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?cs=srgb&dl=pexels-anna-shvets-3962286.jpg&fm=jpg" 
                alt=""
                className='sideBarImg'
            />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua
            </p>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinemas</li>
            </ul>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            
        </div>
    </div>
  );
}
