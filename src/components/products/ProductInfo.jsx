import { Modal, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import Swal from 'sweetalert2';
import ItemCount from "../common/ItemCount";
import { useContext, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import './ProductInfo.css'; // Importa el archivo CSS

const ProductInfo = ({ product, open, setOpen }) => {
    const { id, image, title, price, isAnOffer, itHasDues, stock } = product;
    const { addToCart } = useCartContext();
    const [quantityInCart, setQuantityInCart] = useState(0);

    const handleClose = () => {
        setOpen(prev => !prev);
    }

    const handleAddToCart = (count) => {
        setQuantityInCart(count);
        console.log('agregado', count);

        if (count > 0) {
            addToCart({
                id, title, image, price, quantity: count
            });

            Swal.fire({
                icon: 'success',
                title: `"${title}" se agregó al carrito!`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className="modal-content custom-modal">
                    <img style={{ width: "70%" }} src={image} alt={title} />
                    <Typography variant="h4" style={{ color: "#b6bdc7" }}>{title}</Typography>
                    <Typography variant="h5" style={{ color: "#090c0e" }}>Precio: ${price.toFixed(2)}</Typography>
                    <Typography style={{ color: "#b6bdc7" }}>Stock: {stock}</Typography>
                    <div className="modal-scroll-content">
                        <Typography variant="body2" color="textSecondary">
                            {itHasDues && (
                                <>
                                    <PaymentIcon /> Hasta 6 cuotas sin interés 😎✨
                                </>
                            )}
                        </Typography>
                        <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} buttonColor="#ff2ab3" />
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ProductInfo;
