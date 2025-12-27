import React from 'react'
import Navbar from "../components/Navbar"
import { Outlet } from "react-router"

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default UserLayout
