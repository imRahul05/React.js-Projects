import React from 'react'
import Budget from '../../components/Budget'
import ExpenseForm from '../../components/ExpenseForm'
import ExpenseTable from '../../components/ExpenseTable'

const DashBoard = () => {
  return (
    <>
    <h1 className='text-3xl  font-bold align-centre'>ExpenseTracker</h1>
    <Budget/>
    <ExpenseForm/>
    <ExpenseTable/>
    </>
)}

export default DashBoard