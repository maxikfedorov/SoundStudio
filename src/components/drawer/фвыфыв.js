function Drawer({onClose, onRemove, items = []}) {
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const handleOrder = () => {
        // Вывести сообщение о успешном оформлении заказа
        alert('Заказ успешно оформлен!');
    }
    return (
        <div className="overlay">
            <div className='drawer'>
                <h2 className='drawerLabel'>Корзина
                    <img onClick={onClose} className='removeBtn' src={btnRemove} alt="Remove"/>
                </h2>
                <div className="items">
                    {items.map((obj) => (
                        <div key={obj.id} className="cartItem">
                            #...
                        </div>
                    ))}
                </div>
                <div className="cartTotalBlock">
                    #...
                </div>
            </div>
        </div>
    );
}
export default Drawer;