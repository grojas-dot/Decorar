import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Row, Spinner } from 'react-bootstrap';
import Item from './Item';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    // Usamos fetch para cargar el JSON local desde la carpeta public
    fetch(`/data/${categoryId}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data: ", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <Container className="my-5">

      <h1 className="text-center mb-4 text-capitalize">{categoryId}</h1>
      {loading ? (
        <div className="text-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ItemListContainer;