import "./navbar.css"

export default function NavBar() {
  return (
    <div className="nav">
     <div className="topLeft"><i class="fa-brands fa-facebook"></i></div>
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
      
     </div>
    </div>
   
  )
}
