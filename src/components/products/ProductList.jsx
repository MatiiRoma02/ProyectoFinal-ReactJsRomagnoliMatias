/** @jsxImportSource @emotion/react */
import { CircularProgress, Grid, Typography } from "@mui/material";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json";
import ProductDetail from "./ProductDetail";
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Definir el estilo de la animación de cambio de color
const changeColor = keyframes`
  0% {
    color: #b6bdc7ff;
  }
  50% {
    color: white;
  }
  100% {
    color: #ee413bff;
  }
`;

// Definir el estilo de la animación de desvanecimiento
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Utilizar styled para aplicar estilos y animaciones
const AnimatedTypography = styled(Typography)`
  color: #b6bdc7ff;
  text-shadow: 2px 2px 4px #ee413bff;
  animation: ${changeColor} 2s infinite, ${fadeIn} 1s ease-in-out;
`;

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "products"));
        const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos desde Firestore:", error);
        setError("Error al obtener datos desde Firestore");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <AnimatedTypography variant="h2">PRODUCTOS:</AnimatedTypography>
      <Grid container spacing={3}>
        {data.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
