import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useCart } from '../../context/CartContext';

const Navbar = () => {

    const { cartQuantity } = useCart();

    return (
        <nav className='navbar p-2 pt-3 ps-5 px-5'>
            <h1 className='navbar-brand text-light'>GoalGear</h1>
            <ul className='navList d-flex gap-4  align-items-center'>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/'>Home</Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/category/boots'>Boots</Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/category/jersey'>Jersey</Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/category/gloves'>Gloves</Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/category/guards'>Guards</Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/category/bags'>Bags</Link>
                </li>
                <li>
                    <Link style={{ color: "white", textDecoration: 'none' }} to='/category/socks'>Socks</Link>
                </li>
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