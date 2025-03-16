import React,{useEffect, useState,} from 'react'
import axios from 'axios'
import './App.css'

const Fetch = () => {
    const [posts,setPost] = useState([])
      
    const fetchData = async () => {
       try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        setPost(response.data)
       } catch (error) {
        console.log(error.message)
       }
    }
    useEffect(() => {
        fetchData()
    }, []) 

  return (
   <>
   <h1>Fetch Data</h1>
   
        {posts.map((post) => (
            <div key={post.id}>
                <li>{post.title}</li>
                <p>{post.body}</p>
            </div>
        ))}
   </>
  )
}

export default Fetch