import { Card, CardContent, Grid, Typography } from "@mui/material";
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ProductDetail = ({ product, children }) => {
  const { id, image, title, price, itHadDues, isAnOffer, stock } = product
  const [newProduct, setNewProduct] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const productCollection = collection(db, 'products');
        const querySnapshot = await getDocs(productCollection);

        setNewProduct(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error al obtener productos desde Firestore:", error);
      }
    };

    fetchData();
  }, []);

  console.log('Hola productos desde Firestore', newProduct);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products-container" onClick={handleClick}>
          <img src={image} alt={title} />
          <CardContent className="card-products-content">
            <Typography>{title}</Typography>
            <Typography>${price.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Grid>
      {isSelected && (
        <ProductInfo
          product={product}
          open={isSelected}
          setOpen={setIsSelected}
        />
      )}
    </>
  );
};

export default ProductDetail;
