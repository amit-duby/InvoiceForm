import axios from "axios";
const baseUrl = "http://127.0.0.1:5000";
const Invoice = {
  createInvoice: async (payload) => {
    try {
      const result = await axios.post(`${baseUrl}/api/v1/create`, payload);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getAllInvoic: async () => {
    const result = await axios.get(`${baseUrl}/api/v1/findAll`);
    return result;
  },

  getSingleInvoice: async (id) => {
    const result = await axios.get(`${baseUrl}/api/v1/find/${id}`);
    return result;
  },

  updateInvoice: async (id, payload) => {
    const result = await axios.put(`${baseUrl}/api/v1/update/${id}`, payload);
    return result;
  },

  deleteInvoice: async (id) => {
    const result = await axios.delete(`${baseUrl}/api/v1/delete/${id}`);
    return result;
  },
};

export default Invoice;
