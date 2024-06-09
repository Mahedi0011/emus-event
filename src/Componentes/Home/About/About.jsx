
import about from '../../../../public/img/about.jpg'

const About = () => {
    return (
        <div className='m-3'>
            <h3 className='text-4xl text-center font-Pacifico space-y-3 mt-5 mb-5'>About
                <span className='text-cyan-600 ml-2'>US</span></h3>
            <div className="card lg:card-side bg-base-100 shadow-xl" >
                <figure><img src={about} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, ipsum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione sint error totam nulla aperiam velit beatae minus hic, dignissimos facilis id architecto fugiat maiores?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">About us</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default About;