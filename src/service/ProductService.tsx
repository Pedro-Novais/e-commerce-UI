import axios from "axios";
import BASE_URL from "./const";

export const getAllProductsService = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/product`); 
    return response.data;
  } catch (error) {
    throw new Error("Erro ao carregar os produtos da loja");
  }
}; 

export const getOneProductService = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/product/${id}`);  
    return response.data;
  } catch (error) {
    throw new Error("Erro ao carregar o produto da loja");
  }
};

export const createProductService = async (data: object) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/product`, data);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar produto");
    }
};

export const updateProductService = async (data: object, id: string) => {
    try {
      const response = await axios.patch(`${BASE_URL}/api/product/${id}`, data);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar produto");
    }
};

export const deleteProductService = async (id: string) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/product/${id}`);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar produto");
    }
};

export const createRatingProductService = async (id: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/product/rating/${id}`);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar produto");
    }
};