import { Button } from '@/lib/@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AddToolBtn() {
  return (
    <Button variant={"outline"}><Link href="/tools/add/">Add a Tool</Link></Button>
  )
}
