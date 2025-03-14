import React,{useState} from 'react'
import {findNthPrime} from './PrimeNumberLogic'

const PrimePage = () => {
    const [num,setNum] =  useState(0)
    const primeNo = findNthPrime(num)
  return (
    <>
    <h1>{num} th prime number is : {primeNo}</h1>
    <input type='number'
    placeholder='Enter a number'
    onChange={(e)=>setNum(e.target.value)}
    />
    </>
  )
}

export default PrimePage