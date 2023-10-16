import { AppBar, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";



const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#8abcbc" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <NavLink className="navbar-link" to="/">
                    <Typography >
                        Inicio
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography >
                        Nuestros Productos
                    </Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;