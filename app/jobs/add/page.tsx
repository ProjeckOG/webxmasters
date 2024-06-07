import React from 'react'
import { AddJobForm } from './components/addJobForm'

export default function page() {
  return (
    <div className='mx-auto md:w-3/4'>
        <h1>Add a Job</h1>
        <AddJobForm />
    </div>
  )
}
