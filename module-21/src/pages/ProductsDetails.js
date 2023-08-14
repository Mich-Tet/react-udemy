import React from 'react';
import { useParams } from 'react-router-dom';
const ProductsDetails = () => {
  const params = useParams();

  return <h1>Products Details for {params.productId}</h1>;
};

export default ProductsDetails;
