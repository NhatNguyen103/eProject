import './FanDetail.css';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from 'react-use-cart'; // Import useCart hook
import Footer from './Footer';

function FanDetail() {

    const { id } = useParams();
    const { addItem } = useCart(); // Destructure addItem from useCart hook
    const [fan, setFan] = useState({});
    useEffect(() => {
        fetch(`https://653f52039e8bd3be29e0426c.mockapi.io/fans/${id}`)
            .then((data) => data.json())
            .then((usr) => setFan(usr));
    }, [id]);
    const handleBuyNow = () => {
        addItem({
          id: fan.id,
          title: fan.title,
          price: fan.newPrice,
          quantity: 1,
        });
      };
    
    return (
        <div>
            <div className="fan-detail-container">
                <div className='fan-pic'>
                    <img src={fan.pic} alt={fan.title} />
                    <div class="card__content">
                        <p class="card__title">{fan.title}</p>
                        <p class="card__title">{fan.Category}</p>
                        <p class="card__description">{fan.des}</p>
                    </div>
                </div>
                <div className='fan-info'>
                    <h2 className="fan-title">{fan.title}</h2>
                    <section className="card-reviews">
                        <AiFillStar className='card-star' />
                        <AiFillStar className='card-star' />
                        <AiFillStar className='card-star' />
                        <AiFillStar className='card-star' />
                        <AiFillStar className='card-star' />
                        <span className="total-reviews">{fan.review}</span>
                    </section>

                    <ul>
                        <li>{fan.Category}</li>
                        <li>Color: {fan.color}</li>
                        <li>Country of Origin: {fan.origin}</li>
                        <li>Warranty: {fan.warranty}</li>
                    </ul>
                    <section className="card-price">
                        <div className="price">
                            <del>{fan.Price}</del><span className='newPrice'>
                                ${fan.newPrice}<i class="fa-solid fa-tags"></i>
                            </span>
                        </div>
                    </section>
                    <button className="cartfan" onClick={handleBuyNow}>
                        <i className="fa-solid fa-cart-plus"></i><span className='buy'>Buy Now!</span>
                    </button>
                    <div className='download'>
                        <a href={fan.file} download={fan.flie}>
                            <button>
                                <i class="fa-solid fa-download"></i>
                                <span>Download detail of the fan </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='information'>
                    <hr />
                    <p className='des'>Information</p>
                    {fan.des}
                </div>
                <div className='description'>
                    <div className='table-des'>
                        <hr />
                        <p className='des'>Description</p>
                        <table>
                            <tr>
                                <td className='left'>Fan Color</td>
                                <td className='right'>{fan.color}</td>
                            </tr>
                            <tr>
                                <td className='left'>Fan Type</td>
                                <td className='right'>{fan.Category}</td>
                            </tr>
                            <tr>
                                <td className='left'>Country of Origin</td>
                                <td className='right'>{fan.origin}</td>
                            </tr>
                            <tr>
                                <td className='left'>Series Number</td>
                                <td className='right'>{fan.id}</td>
                            </tr><tr>
                                <td className='left'>Fan Height</td>
                                <td className='right'>{fan.Height}</td>
                            </tr><tr>
                                <td className='left'>Fan mode indicator</td>
                                <td className='right'>{fan.mode}</td>
                            </tr><tr>
                                <td className='left'>Remote Control</td>
                                <td className='right'>{fan.remote}</td>
                            </tr><tr>
                                <td className='left'>IP rating</td>
                                <td className='right'><AiFillStar className='card-star' />
                                    <AiFillStar className='card-star' />
                                    <AiFillStar className='card-star' />
                                    <AiFillStar className='card-star' />
                                    <AiFillStar className='card-star' /></td>
                            </tr><tr>
                                <td className='left'>Number of Blades</td>
                                <td className='right'>{fan.blaze}</td>
                            </tr><tr>
                                <td className='left'>Mount Type</td>
                                <td className='right'>Universal</td>
                            </tr><tr>
                                <td className='left'>Input Power and Required Breaker</td>
                                <td className='right'>{fan.input}</td>
                            </tr><tr>
                                <td className='left'>Operating Temperature</td>
                                <td className='right'>{fan.temp}</td>
                            </tr><tr>
                                <td className='left'>Current (min/max speed)</td>
                                <td className='right'>{fan.current}</td>
                            </tr><tr>
                                <td className='left'>Warranty</td>
                                <td className='right'>{fan.warranty}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FanDetail;