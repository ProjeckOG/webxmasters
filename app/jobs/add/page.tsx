import React from 'react'
import AddJobForm from './components/addJobForm'

export default function page() {
  return (
    <div className='mx-auto md:w-3/4 py-10'>
        <h1 className='font-bold text-center text-3xl py-10'>Add a Job</h1>
        <AddJobForm />
    </div>
  )
}
