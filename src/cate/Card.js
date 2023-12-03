import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'; // Import hook
import './Card.css';

function Card({pic, title, review, newPrice, Price, id}) {
  const navigate = useNavigate();
  const { addItem } = useCart(); // Sử dụng addItem từ hook

  const handleAddToCart = () => {
    // Thêm sản phẩm vào giỏ hàng khi button được click
    addItem({
      id,
      title,
      price: newPrice,
      quantity: 1,
    });
  };
  return (
    <div>
      <section className="card">
        <img src={pic} alt={title} className='card-img' />
        <div className="card-detail">
          <h3 className='card-name'>{title}</h3>
          <section className="card-reviews">
            <AiFillStar className='card-star' />
            <AiFillStar className='card-star' />
            <AiFillStar className='card-star' />
            <AiFillStar className='card-star' />
            <AiFillStar className='card-star' />
            <span className="total-reviews">{review}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{Price}</del><span className='newPrice'>${newPrice}</span>
            </div>
          </section>
          <button className=" cart-fan  " onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
          <button className='detail-fan' onClick={ ()=>navigate(`/Categories/${id}`)}>
            <p>Show more</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Card;