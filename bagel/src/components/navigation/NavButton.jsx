const NavButton = (props) => {
  return (
    <div className="flex flex-row">
        <img src={props.icon} className=""/>
        <span>{props.name}</span>
    </div>
  )
}

export default NavButton