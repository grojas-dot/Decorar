import React, { useState, useContext } from 'react';
import { Card, Button, Form, Col } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Item = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    // El 'codigo' es el nombre de la imagen (id)
    // La 'descripcion' es el 'nombre' del producto
    const itemToAdd = {
        codigo: product.id,
        descripcion: product.nombre,
        precio: product.precio,
        img: product.img,
        id: product.id // Usamos id para control interno
    };
    addItem(itemToAdd, quantity);
    alert(`${quantity} x ${product.nombre} agregado al carrito!`);
  };

  return (
    <Col md={4} lg={3} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={product.img} alt={product.nombre} />
        
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.descripcion}</Card.Text>
          <Card.Text className="fw-bold fs-5 mt-auto">${product.precio.toFixed(2)}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-2">
             <Form.Select 
                style={{ width: '70px' }}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
             >
                {[...Array(10).keys()].map(x => <option key={x+1} value={x+1}>{x+1}</option>)}
             </Form.Select>
            <Button variant="primary" onClick={handleAddToCart}>Agregar</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;