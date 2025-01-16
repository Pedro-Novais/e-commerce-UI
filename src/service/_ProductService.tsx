import axios from "axios";
import {getSubdomain} from "./subdomain"
import { responsesMsg, responsesContent } from "./responses";

export default class ProductService {
  url: string | null = null;
  
  constructor() {
    this.url = getSubdomain()

    if (!this.url) {
      console.error("Nenhum subdomínio detectado.");
      return
    }
  }

  getProduct = async () => {
    try {
      const response = await axios.get(`${this.url}/api/product`, {validateStatus: (status) => status < 500});
      
      return responsesContent(response);

    } catch (error: any) {
      throw new Error("Erro ao carregar o produto da loja");
    }
  }

  getOneProduct = async (id: string | undefined) => {
    try {
      const response = await axios.get(`${this.url}/api/product/${id}`, {validateStatus: (status) => status < 500});
      return responsesContent(response);
    } catch (error) {
      throw new Error("Erro ao carregar o produto da loja");
    }
  }

  createProduct = async (data: object) => {
    try {
      const response = await axios.post(`${this.url}/api/product`, data, {validateStatus: (status) => status < 500});
      return responsesMsg(response);
    } catch (error) {
      throw new Error("Erro ao criar produto");
    }
  }

  updateProduct = async (data: object, id: string) => {
    try {
      const response = await axios.patch(`${this.url}/api/product/${id}`, data, {validateStatus: (status) => status < 500});
      return responsesMsg(response);
    } catch (error) {
      throw new Error("Erro ao atualizar produto");
    }
  }

  deleteProduct = async (id: string) => {
    try {
      const response = await axios.delete(`${this.url}/api/product/${id}`, {validateStatus: (status) => status < 500});
      return responsesMsg(response);
    } catch (error) {
      throw new Error("Erro ao deletar produto");
    }
  }

  createRatingProduct = async (id: string, data: object) => {
    try {
      const response = await axios.post(`${this.url}/api/product/rating/${id}`, data, {validateStatus: (status) => status < 500});
      return responsesMsg(response);
    } catch (error) {
      throw new Error("Erro ao deletar produto");
    }
  };

}