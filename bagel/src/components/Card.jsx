import Heart from "../assets/Heart"
const Card = (props) => {
    return (
        <div>
            <img src={props.image} alt="" className="w-[calc(100vw-2px)] h-[calc(100vw-50px)] " />
            <div className="px-2 py-2">
                {props.caption}
            </div>
            <div className="flex flex-row justify-between px-3 pb-1">
                <div className="flex items-center gap-1">
                    <img src={props.profile} alt="" className="h-8 w-8 rounded-full" />
                    <span>{props.username}</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <Heart/>
                    {props.likes}
                </div>
            </div>

        </div>
    )
}

export default Card