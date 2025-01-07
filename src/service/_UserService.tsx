import axios from "axios";
import { getSubdomain } from "./subdomain";
import { responsesMsg, responsesContent } from "./responses";

export default class UserService {
  url: string | null = null;

  constructor() {
    this.url = getSubdomain()

    if (!this.url) {
      console.error("Nenhum subdomínio detectado.");
      return
    }
  }

  getUser = async () => {
    try {
      const response = await axios.get(`${this.url}/api/user`, {validateStatus: (status) => status < 500});
      return response.data;
    } catch (error) {
      throw new Error("Erro ao carregar os dados do usuário");
    }
  };

  userLogged = async () => {
    try {
      const response = await axios.get(`${this.url}/api/user/userlogged`, {validateStatus: (status) => status < 500});
      return responsesMsg(response)
    } catch (error) {
      throw new Error("Erro ao carregar os dados do usuário");
    }
  };

  createUser = async (data: object) => {
    try {
      const response = await axios.post(`${this.url}/api/user`, data, {validateStatus: (status) => status < 500});
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar conta");
    }
  };


  updateUser = async (data: object) => {
    try {
      const response = await axios.patch(`${this.url}/api/user`, data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualiza informações");
    }
  };

  deleteUser = async () => {
    try {
      const response = await axios.delete(`${this.url}/api/user`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar usuário");
    }
  };

  createAddressUser = async (data: object) => {
    try {
      const response = await axios.post(`${this.url}/api/user/address`, data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar endereço");
    }
  };

  updateAddressUser = async (data: object, id: string) => {
    try {
      const response = await axios.put(`${this.url}/api/user/address/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar endereço");
    }
  };

  deleteAddressUser = async (id: string) => {
    try {
      const response = await axios.delete(`${this.url}/api/user/address/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar endereço");
    }
  };

  loginUser = async () => {
    try {
      const response = await axios.delete(`${this.url}/api/user/login`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao realizar login");
    }
  };
}