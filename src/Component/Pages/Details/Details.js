import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Details.css';

const Details = () => {
    const { details_id } = useParams();
    const { services } = useAuth();
    const getDetails = services.filter(service => service._id === details_id);
    const detail = getDetails[0];
    return (
        <div className='serviceDetails container m-auto my-5'>
            <div className="serviceCard py-2">
                <div className="d-flex align-items-center">
                    <div className='p-3'>
                        <img src={detail?.picture} alt="img" />
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pb-4 title">{detail?.name}</h1>
                        <h6 className="card-title py-1">{detail?.email}</h6>
                        <h6 className="card-title py-1">{detail?.duration}</h6>
                        <h6 className="card-title py-1">{detail?.price}</h6>
                        <p className="card-text text-muted w-75">{detail?.details}</p>
                        <Link to='/home'>
                            <button><i className="fas fa-arrow-left pe-1"></i>Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;