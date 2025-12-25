import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

const Products = () => {
  const products = ["iPhone", "Laptop", "Tablet"];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Quản lý sản phẩm
      </Typography>

      <List>
        {products.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Products;
