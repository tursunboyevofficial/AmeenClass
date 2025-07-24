import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import AppInfo from './components/appInfo/appInfo'
import AppTeacher from './components/appTeacher/appTeacher'
import AppPartners from './components/appPartners/appPartners'
import AppCourse from './components/appCourse/appCourse'
import AppFreeCourse from './components/appFreeCourse/appFreeCourse'
import AppAdvantage from './components/appAdvantage/appAdvantage'
import AppComment from './components/appComment/appComment'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <AppInfo></AppInfo>
    <AppTeacher></AppTeacher>
    <AppPartners></AppPartners>
    <AppCourse></AppCourse>
    <AppFreeCourse/>
    <AppAdvantage/>
    <AppComment></AppComment>
    </>
  )
}

export default App
