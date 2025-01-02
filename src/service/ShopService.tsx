import axios from "axios";
import BASE_URL from "./const";

export const getShopService = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/shop`); 
    return response.data;
  } catch (error) {
    throw new Error("Erro ao carregar os dados da loja");
  }
};

export const updateShopService = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/shop`, data);  
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualiza configurações da loja");
  }
};