import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news
    return (
        <section>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="card-body">
                    <div>

                    </div>
                    <h2 className="card-title">{title}</h2>
                    <figure><img className="w-auto" src={image_url} alt="Shoes" /></figure>
                    {
                        details.length > 200
                            ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className='text-blue-600 font-bold'><i>Read more...</i></Link></p>
                            : <p>{details}</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default NewsCard;
NewsCard.propTypes = {
    news: PropTypes.node,
}