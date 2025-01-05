import axios from "axios";
import {getSubdomain} from "./subdomain"
import { responsesMsg, responsesContent } from "./responses";

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
      return responsesContent(response);
    } catch (error) {
      throw new Error("Erro ao carregar os dados da loja");
    }
  }

  updateShop = async (data: any) => {
    try {
      const response = await axios.post(`${this.url}/api/shop`, data);
      return responsesMsg(response);
    } catch (error) {
      throw new Error("Erro ao atualiza configurações da loja");
    }
  }
}