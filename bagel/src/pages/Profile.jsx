import { useState , useEffect } from "react"
import CustomButton from '../components/CustomButton'
import ProfilePosts from "../components/ProfilePosts"
const Profile = () => {

  const [profile, setProfile] = useState({
    profile:"img",
      username:"username",
      followers:[],
      following:[],
      posts:[]
  })

  const [posts, setPosts] = useState([
    {
      image:"https://plus.unsplash.com/premium_vector-1729005581728-a47708e40ca2?q=80&w=632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:""
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742668947361-739780396fb6?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742668947361-739780396fb6?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742668947396-380be9ffcf0f?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742668947396-380be9ffcf0f?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1740897827628-5c498183dbdf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1740897827628-5c498183dbdf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742668947325-5b323291872d?q=80&w=1627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742668947325-5b323291872d?q=80&w=1627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742668947396-380be9ffcf0f?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742668947396-380be9ffcf0f?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1746862050756-44973326daa1?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1746862050756-44973326daa1?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742766871331-1e5d00b45332?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742766871331-1e5d00b45332?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742894060242-66d9d786eedb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742894060242-66d9d786eedb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      image:"https://plus.unsplash.com/premium_vector-1742897848804-ab4872359776?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      url:"https://plus.unsplash.com/premium_vector-1742897848804-ab4872359776?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
  ])

  const [activeTab, setActiveTab] = useState('posts') // posts/saved/liked

  useEffect(()=>{
    setProfile({
      profile:"https://images.unsplash.com/vector-1744885436383-9127e84fa8d4?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      username:"Hello Kitty",
      followers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
      following:[1,2,3,4,5,6,7,8,9,0,11,2,3,224,100],
      posts:[1,2,3,1,4,51,2,5,612,67,100]
    })
  },[])
  return (
    <div className="flex flex-col">
      <div className='flex p-2 pt-8'>
        <img className='h-20 w-20 rounded-full border-black border' src={profile.profile} alt="" />
        <div className="flex flex-col justify-center gap-2 px-1">
          <span>{profile.username}</span>
          <div className="flex gap-2"><span className="">{profile.following.length} Following</span><span>{profile.followers.length} Followers</span><span>{profile.posts.length} Posts</span></div>

        </div>
      </div>
      <div className="flex gap-5 p-5 border-b border-gray-100">
          <CustomButton onClick={()=>{setActiveTab('posts')}} text={'Posts'} isActive={activeTab === 'posts'}/>
          <CustomButton onClick={()=>{setActiveTab('saved')}} text={'Saved'} isActive={activeTab === 'saved'}/>
          <CustomButton onClick={()=>{setActiveTab('liked')}} text={'Liked'} isActive={activeTab === 'liked'}/>
      </div>
      <div className="grid grid-cols-3 grid-flow-row overflow-auto flex-1">
          {
            //post here
          }
          {posts.map((elem,idx)=>{
            return <ProfilePosts key={idx} image={elem.image} url={elem.url}/>
          })}

      </div>
    </div>
  )
}

export default Profile