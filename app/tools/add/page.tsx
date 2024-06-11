import React from 'react'
import { SuggestToolForm } from './components/suggestToolForm'

export default function () {
  return (
    <div className='mx-auto md:w-3/4 my-10'>
        <h1 className='text-3xl font-bold text-center uppercase py-10'>Suggest a Tool</h1>
        <SuggestToolForm />
    </div>
  )
}
