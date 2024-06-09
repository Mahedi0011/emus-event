

const Review = () => {
    return (
        <div className="m-10">
            <h3 className='text-4xl text-center font-Pacifico space-y-3 mt-5 mb-5'>Our Services
                <span className='text-cyan-600 ml-2'>Review</span></h3>
            <div className="justify-around grid md:grid-cols-3 items-center">
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary mt-3" style={{ "--value": 99.9 }} role="progressbar">99.9%</div>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary mt-3" style={{ "--value": 99.9 }} role="progressbar"> 99.9%</div>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary mt-3" style={{ "--value": 100 }} role="progressbar">100%</div>
            </div>
        </div>
    );
};

export default Review;
