function Input({handleChange, value, name, title, color}) {
    return (
        <div>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name={name} value={value}/>
                <span className='checkmark'
                style={{backgroundColor:color}}></span>{title}
            </label>
        </div>
      );
}

export default Input;