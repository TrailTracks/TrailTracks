import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='landingpage-cont'>
      <h1>Trail Tracks</h1>
      <div>
        <h2>Welcome to Trail Tracks, a simple way to keep track of the trails that are on your bucket list!</h2>
        <Link href="/dashboard">Dashboard</Link>
        
      </div>
    </div>
  )
}
