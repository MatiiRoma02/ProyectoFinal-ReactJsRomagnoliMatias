import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (<div className="container">
       <Typography variant="h2" style={{ color: "#8abcbc", textShadow: "0px 0px 5px white" }}>
  Nuestro catálogo⬇️
</Typography>

        {
            data.map((category) => {
                return (
                    <Card key={category.id} sytle={{ color: "#2c494d" }}>
                        <CardContent component={Link} to={`/category/${category.category}`}>
                            <Typography >{category.category}</Typography>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>);
}

export default Categories;