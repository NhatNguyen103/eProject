import Input from "./Input";

function Color({handleChange}) {
    return (
        <div>
            <h2 className='sidebar-title'>Color</h2>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio"
                value="" name = "test3"/>
                <span className="checkmark"></span>All
              </label>
              <Input
                handleChange={handleChange}
                value="Black"
                color = "black"
                title="Black"
                name = "test3"
              />
              <Input
                handleChange={handleChange}
                value="White"
                color="white"
                title="White"
                name = "test3"
              />
              <Input
                handleChange={handleChange}
                value="Brown"
                color="brown"
                title="Brown"
                name = "test3"
              />
              <Input
                handleChange={handleChange}
                value="Red"
                color="red"
                title="Red"
                name = "test3"
              />
              <Input
                handleChange={handleChange}
                value="Blue"
                color="blue"
                title="Blue"
                name = "test3"
              />
              <Input
                handleChange={handleChange}
                value="Purple"
                color="purple"
                title="Purple"
                name = "test3"
              />
              <hr />
        </div>
    );
}

export default Color;