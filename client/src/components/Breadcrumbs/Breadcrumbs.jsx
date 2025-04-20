import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Breadcrumbs = ({product}) => {


    return (
        <span
            className='breadCrumbs container fs-5'
        >
            HOME <ArrowForwardIosIcon />
            {(product.category).toUpperCase()}
            <ArrowForwardIosIcon />
            {product.name}
        </span>

    )
}

export default Breadcrumbs