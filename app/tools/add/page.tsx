import React from 'react'
import { SuggestToolForm } from './components/suggestToolForm'

export default function () {
  return (
    <div className='container my-10'>
        <h1 className='text-3xl font-bold text-center uppercase py-10'>Suggest a Tool</h1>
        <SuggestToolForm />
    </div>
  )
}
