/** @jsxImportSource @emotion/react */
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from "../../mocks/categorias.json";
import { Link } from "react-router-dom";

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
  text-shadow: 2px 2px 4px #ee413bff; // Actualizado: text shadow en color #ee413bff
  animation: ${changeColor} 2s infinite, ${fadeIn} 1s ease-in-out;
`;

// Utilizar styled para aplicar estilos y animaciones al Card
const AnimatedCard = styled(Card)`
  background-color: #ee413bff;
  color: #b6bdc7ff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const Categories = () => {
  const { data, loading } = useAsyncMock(categories);

  if (loading) return <CircularProgress />;

  return (
    <div className="container" sx={{ backgroundColor: "#ee413bff" }}>
      <AnimatedTypography variant="h2">TODAS LAS CATEGORIAS✨:</AnimatedTypography>

      {data.map((category, index) => (
        <AnimatedCard
          key={index}
          component={Link}
          to={`/category/${category.category}`}
          className="category-card"
        >
          <CardContent>
            <Typography>{category.category}</Typography>
          </CardContent>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default Categories;
