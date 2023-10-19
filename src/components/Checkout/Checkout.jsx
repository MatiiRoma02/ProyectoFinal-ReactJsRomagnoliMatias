import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const [error, setError] = useState(null);

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const comprar = async (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    }

    try {
      const pedidosRef = collection(db, "pedidos");
      const doc = await addDoc(pedidosRef, pedido);
      setPedidoId(doc.id);
      vaciarCarrito();
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      setError('Hubo un error al procesar la orden. Por favor, inténtalo de nuevo.');
    }
  }

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresá tu nombre"
            {...register("nombre", { required: 'Este campo es requerido' })}
          />
          {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresá tu e-mail"
            {...register("email", { required: 'Este campo es requerido' })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            placeholder="Ingresá tu teléfono"
            {...register("telefono", { required: 'Este campo es requerido' })}
          />
          {errors.telefono && <span className="error-message">{errors.telefono.message}</span>}
        </div>
        <button className="enviar" type="submit">Comprar</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Checkout;
