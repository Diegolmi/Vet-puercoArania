import jwt_decode from 'jwt-decode';
const isAuthenticate = () => {
    const jwt = localStorage.getItem('jwt')
    try {
        const decode = jwt_decode(jwt)
        return decode;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default isAuthenticate;