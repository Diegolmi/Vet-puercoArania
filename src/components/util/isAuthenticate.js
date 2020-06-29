const isAuthenticate = () => !!localStorage.getItem('jwt');

export default isAuthenticate;