import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeFromCart } = useCartContext();
  const [buyerDetails, setBuyerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = () => {
    console.log("Buying now with details:", buyerDetails);
    Swal.fire({
      title: "Compra realizada con éxito",
      icon: "success",
      text: "Gracias por tu compra",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuyerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <Paper elevation={3} sx={{ backgroundColor: "#ee413bff" }}>
        <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
          Carrito
        </Typography>
        {cart.items.length === 0 ? (
          <Typography variant="body2" align="center" sx={{ p: 2 }}>
            Carrito vacío
          </Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Imagen</TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={item.image}
                          alt={item.title}
                        />
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleRemoveFromCart(item.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={4}></TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleRemoveFromCart("all")}
                        color="error"
                      >
                        Vaciar Carrito
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Total:</TableCell>
                    <TableCell>${cart.total.toFixed(2)}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ padding: "16px", textAlign: "center" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Detalles de compra
              </Typography>
              <TextField
                label="Nombre"
                name="name"
                value={buyerDetails.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Correo Electrónico"
                name="email"
                value={buyerDetails.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Dirección"
                name="address"
                value={buyerDetails.address}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleBuyNow}
                sx={{ mt: 2 }}
              >
                Comprar Ahora
              </Button>
            </div>
          </>
        )}
      </Paper>
    </div>
  );
};

export default Cart;
