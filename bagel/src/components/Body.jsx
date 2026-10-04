import Card from './Card'
import { useState, useEffect } from 'react'
const Body = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts([{
      image: "https://plus.unsplash.com/premium_vector-1741709178405-8bd6f64f2f65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is caption",
      username: "Oreo",
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: [{ _id: "001" }, { _id: "002" }, { _id: "003" }, { _id: "004" }, { _id: "005" }, { _id: "006" }, { _id: "007" }, { _id: "008" }, { _id: "008" }, { _id: "000" },]
    },
    {
      image: "https://plus.unsplash.com/premium_vector-1742626219492-8d8c3463ec87?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is caption",
      username: "Riruru",
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: [{ _id: "001" }, { _id: "002" }, { _id: "003" }, { _id: "004" }, { _id: "005" }, { _id: "006" }, { _id: "007" }, { _id: "008" }, { _id: "008" }, { _id: "000" },]
    },
    {
      image: "https://plus.unsplash.com/premium_vector-1714646949344-34a055dd80b0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is caption",
      username: "Yash",
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: [{ _id: "001" }, { _id: "002" }, { _id: "003" }, { _id: "004" }, { _id: "005" }, { _id: "006" }, { _id: "007" }, { _id: "008" }, { _id: "008" }, { _id: "000" },]
    },
    {
      image: "https://plus.unsplash.com/premium_vector-1743016967917-ff0ae2740555?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is caption",
      username: "Yash",
      profile: "https://images.unsplash.com/vector-1738312097380-45562da00459?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: [{ _id: "001" }, { _id: "002" }, { _id: "003" }, { _id: "004" }, { _id: "005" }, { _id: "006" }, { _id: "007" }, { _id: "008" }, { _id: "008" }, { _id: "000" },]
    } 
    ])
  }, [])

  return (
    <div className='flex-1 overflow-auto'>
      {posts.map((elem, idx) => {
        return <Card key={idx} image={elem.image} caption={elem.caption} username={elem.username} profile={elem.profile} likes={elem.likes.length} />
      })}
    </div>
  )
}

export default Body