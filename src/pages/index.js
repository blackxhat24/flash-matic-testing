import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Calculator from '../components/Calculator'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import Reinvestment from '../components/Reinvesment/Reinvestment'
import Sidebar from '../components/Sidebar'
import Swap from '../components/Swap'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Routes>
                <Route path='/' element={<Dashboard />}  />
                <Route path='/swap' element={<Swap />}  />
                <Route path='/calculator' element={<Calculator />}  />
                <Route path='/reinvestment' element={<Reinvestment />}  />
            </Routes>
        </>
    )
}

export default Home
