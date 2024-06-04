const express = require("express");
const app = express();
const port = 4000;

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "This is product 1",
    image: "https://placehold.co/300x300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "This is product 2",
    image: "https://placehold.co/300x300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    description: "This is product 3",
    image: "https://placehold.co/300x300",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    description: "This is product 4",
    image: "https://placehold.co/300x300",
  },
  {
    id: 5,
    name: "Product 5",
    price: 50,
    description: "This is product 5",
    image: "https://placehold.co/300x300",
  },
  {
    id: 6,
    name: "Product 6",
    price: 60,
    description: "This is product 6",
    image: "https://placehold.co/300x300",
  },
  {
    id: 7,
    name: "Product 7",
    price: 70,
    description: "This is product 7",
    image: "https://placehold.co/300x300",
  },
  {
    id: 8,
    name: "Product 8",
    price: 80,
    description: "This is product 8",
    image: "https://placehold.co/300x300",
  },
  {
    id: 9,
    name: "Product 9",
    price: 90,
    description: "This is product 9",
    image: "https://placehold.co/300x300",
  },
  {
    id: 10,
    name: "Product 10",
    price: 100,
    description: "This is product 10",
    image: "https://placehold.co/300x300",
  },
  {
    id: 11,
    name: "Product 11",
    price: 110,
    description: "This is product 11",
    image: "https://placehold.co/300x300",
  },
];

// Define the /api/products endpoint
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
