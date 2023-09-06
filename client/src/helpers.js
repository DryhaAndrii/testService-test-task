import axios from "axios";


export const getUserInfoWithToken = async (token) => {
    try {
        const response = await axios.get('http://localhost:3001/api/user/getInfo', {
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

        const response = await axios.get('http://localhost:3001/api/checkTokenExpire/', {
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
        const response = await axios.get('http://localhost:3001/api/test/getTest');

        return response.data;
    } catch (error) {
        console.error('Request error:', error);
        return null;
    }
};
export const getTestById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/test/getTestById/${id}`);

        return response.data;
    } catch (error) {
        console.error('Request error:', error);
        return null;
    }
};
export const getTestsByUserId = async (token) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/test/getTestsByUserId?token=${token}`);

        return response.data;
    } catch (error) {
        console.error('Ошибка запроса:', error);
        return null;
    }
};