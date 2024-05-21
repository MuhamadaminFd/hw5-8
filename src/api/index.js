import axios from 'axios';


const inctance = axios.create({
    baseURL: 'http://localHost:5000/'
})

const getBooks = () => inctance.get('/books');
const getCart = () => inctance.get('/cartItem');
const addToCart = (payload) => inctance.post('/cartItem' , payload);
const editCartItem = (payload ) => inctance.put(`cartItem/${payload.id}`, payload );
const deleteCartItem = (id) => inctance.delete(`cartItem/${id}`);


const aip = {
    getBooks,
    getCart,
    addToCart,
    editCartItem,
    deleteCartItem
}

export default aip;