import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Button, Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart, cartTotalPrice } = useContext(CartContext);

  const handleSendOrder = () => {
    const mailTo = 'gustavo.a.rojas@gmail.com'; // Reemplaza con tu email
    const subject = 'Nuevo Pedido desde web Pekis';
    let body = 'Detalle del pedido:\n\n';
    
    cart.forEach(item => {
        body += `Código: ${item.codigo}\n`;
        body += `Descripción: ${item.descripcion}\n`;
        body += `Cantidad: ${item.quantity}\n`;
        body += `------------------------\n`;
    });

    body += `\nTotal a Pagar: $${cartTotalPrice()}`;

    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  if (cart.length === 0) {
    return (
      <Container className="text-center my-5">
        <h1>Tu carrito está vacío</h1>
        <p>No has agregado ningún producto todavía.</p>
        <Button as={Link} to="/" variant="primary">Ir a la tienda</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
  <h1>Detalle del pedido</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Código</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unit.</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td><Image src={item.img} rounded style={{width: '60px'}}/></td>
              <td>{item.codigo}</td>
              <td>{item.descripcion}</td>
              <td>{item.quantity}</td>
              <td>${item.precio.toFixed(2)}</td>
              <td>${(item.precio * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">
        <h3>Total del Pedido: ${cartTotalPrice()}</h3>
        <Button variant="secondary" onClick={clearCart} className="me-2">Vaciar Carrito</Button>
        <Button variant="success" onClick={handleSendOrder}>Enviar Pedido</Button>
      </div>
      <div className="alert alert-info mt-4">
        <strong>Nota:</strong> Al hacer clic en "Enviar Pedido", se abrirá tu aplicación de correo electrónico predeterminada con los detalles del pedido listos para ser enviados.
      </div>
    </Container>
  );
};

export default Cart;