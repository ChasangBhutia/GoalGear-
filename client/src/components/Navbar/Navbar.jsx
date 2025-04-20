import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useCart } from '../../context/CartContext';

const Navbar = () => {


    const { cartQuantity } = useCart();
    const [activeNav, setActiveNav] = useState('/');
    const location = useLocation();

    const handleNavClick = (path) => {
        setActiveNav(path);
    };
    
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Boots', path: '/category/boots' },
        { label: 'Jersey', path: '/category/jersey' },
        { label: 'Gloves', path: '/category/gloves' },
        { label: 'Guards', path: '/category/guards' },
        { label: 'Bags', path: '/category/bags' },
        { label: 'Socks', path: '/category/socks' },
    ];



    return (
        <nav className='navbar p-2 pt-3 ps-5 px-5'>
            <h1 className='navbar-brand text-light'>GoalGear</h1>
            <ul className='navList d-flex gap-4 align-items-center'>
                {navItems.map(({ label, path }) => (
                    <li
                        key={path}
                        onClick={() => handleNavClick(path)}
                        style={{
                            borderBottom: activeNav === path ? '2px solid yellow' : 'none',
                            paddingBottom: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        <Link
                            style={{
                                    textDecoration: 'none',
                                    color: activeNav === path ? 'yellow' : 'white',
                                  }}
                            to={path}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='d-flex gap-3 style-type-none align-items-center'>
                <li>
                    <SearchOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
                </li>
                <li className='position-relative'>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/cart'>
                        <span className="cartQuantity d-flex justify-content-center p-1 text-light">{cartQuantity}</span>
                        <ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} />
                    </Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/profile'><AccountCircleOutlinedIcon sx={{ fontSize: 40 }} /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar