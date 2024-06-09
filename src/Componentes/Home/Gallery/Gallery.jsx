

import pic1 from '../../../../public/img/gallery1.jpg'
import pic2 from '../../../../public/img/gallery2.jpg'
import pic3 from '../../../../public/img/gallery3.jpg'
import pic4 from '../../../../public/img/gallery4.jpg'
import pic5 from '../../../../public/img/gallery5.jpg'
import pic6 from '../../../../public/img/gallery6.jpg'
// import pic7 from '../../../../public/img/gallery6.jpg'



const Gallery = () => {
    return (
        <div className='m-6'>
            <h3 className='text-4xl text-center font-Pacifico space-y-3 mt-5 mb-5'>Our
                <span className='text-cyan-600 ml-2'>Gallery</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic1} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic2} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic3} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic4} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic5} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic6} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Gallery;