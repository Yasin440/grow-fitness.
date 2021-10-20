import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Details.css';

const Details = () => {
    const { details_id } = useParams();
    const { services } = useAuth();
    const getDetails = services.filter(service => service._id === details_id);
    const detail = getDetails[0];
    // console.log(detail);
    return (
        <div className='container m-auto my-5'>
            <div className="serviceCard py-2">
                <div className="d-flex align-items-center">
                    <div className='p-3'>
                        <img src={detail?.picture} className="card-img-top" alt="img" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{detail?.name}</h5>
                        <h6 className="card-title">{detail?.email}</h6>
                        <h6 className="card-title">{detail?.duration}</h6>
                        <h6 className="card-title">{detail?.price}</h6>
                        <p className="card-text text-muted w-75">{detail?.details}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;