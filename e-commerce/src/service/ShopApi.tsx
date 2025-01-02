import axios from "axios";
import BASE_URL from "./const";

export const fetchShopData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/shop`); 
    return response.data;
  } catch (error) {
    throw new Error("Erro ao carregar os dados da loja");
  }
};

export const updateShopData = async (item: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/shop`, item);  
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualiza configurações da loja");
  }
};