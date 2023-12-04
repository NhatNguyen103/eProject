import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Sidebar from "../cate/Sidebar";
import Search from "../cate/Search";
import Recommend from "../cate/Recommend";
import Product from "../cate/Product";
import products from '../cate/data';
import React, { useState } from 'react';
import Card from '../cate/Card';
import Footer from "../Components/Footer";
import { useCart } from 'react-use-cart'; // Import hook

function Categories() {
    const { addItem } = useCart();

    const [selectCategory, setSelectCategory] = useState(null);
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleInputChange = event => { setQuery(event.target.value) }

    const filterItems = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

    const handleAddToCart = (item) => {
        addItem(item);
    };

    const handleChange = event => { setSelectCategory(event.target.value) }
    const handleClick = event => { setSelectCategory(event.target.value) }
    const handleSearch = () => {
        const filteredResult = filterData(products, selectCategory, query);
        setSearchResult(filteredResult);
    }

    const handleLogoClick = () => {
        // Logic for handling logo click (e.g., go to homepage)
        // For now, let's just clear the search query
        setQuery("");
    }

    const handleShowMoreClick = () => {
        // Logic for handling "Show more" click (e.g., show more items)
        // For now, let's just clear the search query
        setQuery("");
    }

    function filterData(products, selected, query) {
        let filteredProducts = products
        if (query) {
            filteredProducts = filteredProducts.filter(({ title, Price, newPrice }) =>
                title.toLowerCase().includes(query.toLowerCase()) ||
                Price.toLowerCase().includes(query.toLowerCase()) ||
                newPrice.toLowerCase().includes(query.toLowerCase())
            );
        }
        if (selected) {
            filteredProducts = filteredProducts.filter(({ Category, color, newPrice, title, name, blaze, origin }) =>
                Category === selected ||
                color === selected ||
                newPrice === selected ||
                name === selected ||
                title === selected ||
                blaze === selected ||
                origin === selected
            );
        }

        return filteredProducts.map(({ pic, title, star, review, Price, newPrice, id, blaze, origin }) => (
            <Card
                key={id}
                pic={pic}
                title={title}
                star={star}
                review={review}
                newPrice={newPrice}
                Price={Price}
                id={id}
                blaze={blaze}
                origin={origin}
                onAddToCart={handleAddToCart}
            />
        ));
    }

    const result = filterData(products, selectCategory, query);

    return (
        <div>
            <Navbar onLogoClick={handleLogoClick} onShowMoreClick={handleShowMoreClick} />
            <HeroSection
                name="hero-gal"
                img="./image/gal.jpg"
                title="CATEGORIES"
            />
            <Sidebar handleChange={handleChange} />
            <Search onSearch={handleSearch} query={query} handleChange={handleInputChange} />

            <Recommend handleChange={handleClick} />
            <Product result={result} />
            <Footer />
        </div>
    );
}

export default Categories;
