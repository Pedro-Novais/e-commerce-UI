import axios from "axios";
import BASE_URL from "./const";

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user`); 
    return response.data;
  } catch (error) {
    throw new Error("Erro ao carregar os dados do usuário");
  }
};

export const createUserData = async (data: object) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user`, data);  
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar conta");
  }
};


export const updateUserData = async (data: object) => {
    try {
      const response = await axios.patch(`${BASE_URL}/api/user`, data);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualiza informações");
    }
  };

export const deleteUserData = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/user`);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar usuário");
    }
};

export const CreateAddresUserData = async (data: object) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/user/address`, data);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar endereço");
    }
};

export const UpdateAddresUserData = async (data: object, id: string) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/user/address/${id}`, data);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar endereço");
    }
};

export const DeleteAddresUserData = async (id: string) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/user/address/${id}`);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar endereço");
    }
};

export const LoginUserData = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/user/login`);  
      return response.data;
    } catch (error) {
      throw new Error("Erro ao realizar login");
    }
};