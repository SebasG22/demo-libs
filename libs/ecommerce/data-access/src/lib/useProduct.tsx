import { useState } from 'react';
import { useDetail } from './useDetail';

export function useProduct() {
  const message = useDetail();
  const [product, setProduct] = useState('estado inicial del producto');

  // Llamada a la API con la libreria X

  return { product, setProduct, message };
}
