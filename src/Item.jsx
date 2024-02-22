const Item = ({ setIsOpen }) => {
    return (
        <div className="item-container">
            <div className="img-container">
                <img src="../public/images/shoe.webp" className="shoe"/>
            </div>
            <div className="item-title-container">
                <p className="item-title">Nike Dunk High Black/White</p>
                <button
                    className="view-model-btn"
                    onClick={() => setIsOpen(true)}
                >View 3d Model</button>
            </div>
            <p className="item-gender">Unisex Shoes</p>
            <p className="item-color">2 Colors</p>
            <h3 className="item-price">$130</h3>
        </div>
    );
}
 
export default Item;