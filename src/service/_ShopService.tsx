import axios from "axios";
import {getSubdomain} from "./subdomain"

export default class ShopService {
  url: string | null = null;

  constructor() {
    this.url = getSubdomain()

    if (!this.url) {
      console.error("Nenhum subdomínio detectado.");
      return
    }
  }

  getShop = async () => {
    try {
      const response = await axios.get(`${this.url}/api/shop`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao carregar os dados da loja");
    }
  }

  updateShop = async (data: any) => {
    try {
      const response = await axios.post(`${this.url}/api/shop`, data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualiza configurações da loja");
    }
  }
}