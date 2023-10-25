import { faker } from "@faker-js/faker";

const getProducts = (req, res) => {
  const productList = [
    {
      nombre: faker.commerce.productName(),
    },
  ];
  res.json(productList);
};

const createProducts = (req, res) => {
  res.status(201).json();
};

const updateProduct = (req, res) => {
  res.status(200).json();
};

const deleteProduct = (req, res) => {
  res.status(200).json();
};

const getOneProduct = (req, res) => {
  
  const productObject = {
    nombre: faker.commerce.productName(),
    precio: faker.commerce.price(),
  };
  res.status(200).json(productObject);
};

//module.exports = { getProducts, createProducts, updateProduct, deleteProduct };
export {
  getProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
