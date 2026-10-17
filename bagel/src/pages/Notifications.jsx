import CustomButton from "../components/CustomButton"
import { useState } from 'react'
import NewFollower from "../components/NewFollower"

const Notifications = () => {
  //dummy notifications
  const [newFollowersData, setNewFollowersData] = useState([
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User1",
      time: "Yesterday",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User20",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User27",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User21",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User22",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User67",
      time: "2D ago",
      isFollowing: true
    },
  ])
  const [commentData, setCommentData] = useState([
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "UserCommented",
      time: "Yesterday",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User20UserCommented",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User27UserCommented",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User21UserCommented",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User22UserCommented",
      time: "2D ago",
      isFollowing: true
    },
    {
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "User67UserCommented",
      time: "2D ago",
      isFollowing: true
    },
  ])
  const [isFollowers, setIsFollowers] = useState(true)

  return (
    <>
      <div className="flex gap-2 py-2">
        <CustomButton onClick={() => { setIsFollowers(true) }} isActive={isFollowers} text="New Followers" />
        <CustomButton onClick={() => { setIsFollowers(false) }} isActive={!isFollowers} text="Comments" />
      </div>
      <div className="flex flex-col flex-1 gap-5 overflow-auto">

        {isFollowers ?
          newFollowersData.map((elem, idx) => {
            return <NewFollower key={idx} name={elem.name} profile={elem.profile} time={elem.time} isFollowing={elem.isFollowing} />
          })
          : commentData.map((elem, idx) => {
            return <NewFollower key={idx} name={elem.name} profile={elem.profile} time={elem.time} isFollowing={elem.isFollowing} />
          })
        }
      </div>
    </>
  )
}

export default Notifications