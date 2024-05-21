import React, { useEffect } from 'react'
import fethAllCart from '../../store/reducer/cartReducer';

function Cart() {
    const dispatch = useDispatch();
    const { cart, isLoadingCart, cartError } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fethAllCart())
    }, []);

    const renderItems = (item, idx) => {
        const { title, count, total, id } = item;


        const onAddToCart = () => console.log(id);
        const onRemoveFromCart = () => console.log(id);

        return (
            <tr key={`item-${id}`}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>
                    <button variant='out line success' className='mx-1' onClick={onAddToCart}>
                        <i className='fa-solid fa-plus'></i>
                    </button>
                    <button variant='out line warning' className='mx-1' onClick={onRemoveFromCart}>
                        <i className='fa-solid fa-minus'></i>
                    </button>
                    <button variant='out line danger' className='mx-1'>
                        <i className='fa-solid fa-trash'></i>
                    </button>
                </td>
            </tr>
        )
    }


    return <div>
        <h2>your order</h2>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>item</th>
                    <th>count</th>
                    <th>price</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>{cart?.map(renderItems)}</tbody>
        </Table>
    </div>
}

export default Cart