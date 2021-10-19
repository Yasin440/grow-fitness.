import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { details_id } = useParams();
    return (
        <div>
            <p>id{details_id}</p>
        </div>
    );
};

export default Details;