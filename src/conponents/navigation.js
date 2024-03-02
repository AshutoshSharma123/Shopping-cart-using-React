import React from 'react'
import { Link } from 'react-router-dom'

const navigation = () => {
    const cartStyle = {
        background: "#F59E0D",
        display: "flex",
        color: 'black',
        padding: "4px 5px",
        borderRadius: "5px",
    }













    return (
        <>
            <nav className="container text-bold mx-auto my-4 flex items-center justify-between text-black-700">


                <Link to="/">
                    <img src='/images/logo.png' style={{ height: 50 }} alt='logo' />
                </Link>
                <ul className='flex items-center gap-4 text-500'>
                    <li className=''><Link to="/">HOME</Link></li>
                    <li className='ml-6'><Link to="/Products">PRODUCTS</Link></li>

                    <li className='ml-6'>

                        <Link to="/Cart">
                            <div style={cartStyle}>

                                <span className='text-black-500'>10</span>

                                <img src='/images/cart.png' style={{ height: 30, color: "white" }} alt='cart' />

                            </div>
                        </Link>

                    </li>

                </ul>




            </nav>

        </>
    )
}

export default navigation
