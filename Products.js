const Products = () => {
  const products = [
    { id: 1, name: "iPhone" },
    { id: 2, name: "Laptop" },
  ];

  return (
    <div>
      <h3>Quản lý sản phẩm</h3>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
