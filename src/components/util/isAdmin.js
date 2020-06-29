const isAdmin = () => !!localStorage.getItem('role') === 'admin';

export default isAdmin;