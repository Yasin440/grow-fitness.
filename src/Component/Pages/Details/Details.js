import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { _id } = useParams();
    return (
        <div>
            <p>id{_id}</p>
        </div>
    );
};

export default Details;