import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import NewArtLogo from '../../assets/newart.svg'; // Importa directamente la imagen

const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: '#ee413bff' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <NavLink to="/">
                    <img src={NewArtLogo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
                </NavLink>
                <NavLink className="navbar-link" to="/">
                    <Typography style={{ textShadow: '2px 2px 4px black', color: '#ffffffff' }}>
                        CATEGORIAS
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography style={{ textShadow: '2px 2px 4px black', color: '#ffffffff' }}>
                        PRODUCTOS
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/cart">
                    <CartWidget />
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
