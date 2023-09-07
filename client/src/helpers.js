import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getUserInfoWithToken = async (token) => {
    try {
        const response = await axios.get(`${apiUrl}user/getInfo`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Request error:', error);
        return null;
    }
};
export const checkTokenExpire = async (token) => {
    try {

        const response = await axios.get(`${apiUrl}checkTokenExpire/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Request error:', error);
        return null;
    }
};
export const getTests = async () => {
    try {
        const response = await axios.get(`${apiUrl}test/getTest`);

        return response.data;
    } catch (error) {
        console.error('Request error:', error);
        return null;
    }
};
export const getTestById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}test/getTestById/${id}`);

        return response.data;
    } catch (error) {
        console.error('Request error:', error);
        return null;
    }
};
export const getTestsByUserId = async (token) => {
    try {
        const response = await axios.get(`${apiUrl}test/getTestsByUserId?token=${token}`);

        return response.data;
    } catch (error) {
        console.error('Ошибка запроса:', error);
        return null;
    }
};