import './Recommend.css'
function Recommend(handleClick) {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended btns">
        <button className='btns'>All Fans</button>
        <button className='btns'>Ceiling Fans</button>
        <button className='btns'>Standing Fans</button>
        <button className='btns'>Table Fans</button>
        <button className='btns'>Exhaust Fans</button>
      </div>
    </div>
  );
}

export default Recommend;