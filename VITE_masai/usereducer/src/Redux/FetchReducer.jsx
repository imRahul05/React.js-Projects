import React,{useEffect, useReducer, useState,} from 'react'
import axios from 'axios'
import '../App.css'
import {reducer} from '../Components/reducer'


const initialState ={
    posts:[],
    loading:true,
    error:''
    }


const fetchReducer = () => {
     const [state,dispatch]  = useReducer(reducer,initialState)
    const fetchData = async () => {
       try {
        dispatch({type:'FETCH_LOADING'})
        const response = await axios('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        dispatch({type:'FETCH_SUCCESS', payload:response.data})
       } catch (error) {
        console.log(error.message)
        dispatch({type:'FETCH_ERROR',payload:error.message})
       }
    }
    useEffect(() => {
        fetchData()
    }, []) 

   const {posts,loading,error} = state
   if(loading){
    return <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',fontFamily: 'Arial, sans-serif',
     background: 'rgb(63,94,251)',background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(205,107,127,1) 100%)',padding:'0px',margin:'0px'}}>Loading...</h1>
   }
   if(error){
       return <h1>{error
        }</h1>
   }

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

export default fetchReducer