import './Category.css';
import Input from './Input';
function Category({handleChange}) {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
              <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio"
                value="" name = "test"/>
                <span className="checkmark"></span>All
              </label>
              <Input
                handleChange={handleChange}
                value="Ceiling Fans"
                title="Ceiling Fans"
                name = "test"
              />
              <Input
                handleChange={handleChange}
                value="Standing Fans"
                title="Standing Fans"
                name = "test"
              />
              <Input
                handleChange={handleChange}
                value="Table Fans"
                title="Table Fans"
                name = "test"
              />
              <Input
                handleChange={handleChange}
                value="Exhaust Fans"
                title="Exhaust Fans"
                name = "test"
              />
            </div>
            <hr />
        </div>
      );
}

export default Category;