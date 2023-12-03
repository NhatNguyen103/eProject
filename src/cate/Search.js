import './Search.css';
import { AiOutlineSearch } from 'react-icons/ai';

import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

function Search({ onSearch, query, handleChange }) {
    return (
        <nav>
            <br />
            <div className="nav-container">
            <span className='search-icon'> 

            </span>
            <input
                    type="text"
                    className='search-input'
                    placeholder='Enter Your Search'
                    value={query}
                    onChange={handleChange}
                />
  
            <AiOutlineSearch style={{fontSize: " 50px",}} className='Logo'/>  
            </div>
            <div className="profile-container">
                <Link>
                    <AiOutlineUserAdd className='nav-icons' />
                </Link>
                <Link>
                    <AiOutlineShoppingCart className="nav-icons" />
                </Link>
                <Link>
                    <CiHeart className="nav-icons" />
                </Link>


            </div>
        </nav >
    );
}

export default Search;