const Card = (props) => {
  return (
    <div>
        <div>
            <img src={props.image} alt="" className="w-[calc(100vw-2px)]" />
        </div>
        <div>
            {props.caption}
        </div>
        <div className="flex">
            <img src={props.profile} alt="" className="h-5 w-5 rounded-full" />
            <span>{props.username}</span>
        </div>
    </div>
  )
}

export default Card