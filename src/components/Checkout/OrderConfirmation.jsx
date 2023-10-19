import React from 'react';
import { useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>¡Compra Exitosa!</h2>
      <p>Gracias por tu compra. Tu ID de compra es: {id}</p>
    </div>
  );
};

export default OrderConfirmation;
