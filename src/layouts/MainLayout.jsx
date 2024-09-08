import { Outlet } from 'react-router-dom'
import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default MainLayout