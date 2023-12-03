import Input from "./Input";
function Origin({handleChange}) {
    return (
        <div>
            <h2 className='sidebar-title'>Country of Origin</h2>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio"
                value="" name = "test4"/>
                <span className="checkmark"></span>All
              </label>
              <Input
                handleChange={handleChange}
                value="USA"
                title="USA"
                name = "test4"
              />
              <Input
                handleChange={handleChange}
                value="China"
                title="China"
                name = "test4"
              />
        </div>
    );
}

export default Origin;