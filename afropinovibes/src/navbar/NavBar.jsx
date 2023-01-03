import "./navbar.css"

export default function NavBar() {
  return (
    <div className="nav">
     <div className="topLeft"><i className="topIcon fa-brands fa-facebook"></i></div>
     <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>

      </ul>
     </div>
     <div className="topRight">
      <img className="topImg"  src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/323412458_566459808632195_2299461858596715432_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H2wu7IPvTq4AX_oYs-4&_nc_ht=scontent.fosu2-1.fna&oh=00_AfDrT0La8vpVq4w3n0d4gFMkF09xneHCNp6hq98vs3IFjw&oe=63B9871E" alt=""  />
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
   
  )
}
