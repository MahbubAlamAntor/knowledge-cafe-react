import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBooksBtn,handleMarkAsRead}) => {
    const {title, author_img, author_name, posted_date, reading_time, hashtags, cover} = blog
    return (
        <div className='space-y-5 mt-8'>
            <img src={author_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-16 rounded-2xl' src={cover} alt={`This is cover images ${title}`} />
                    <div className='ml-5'>
                        <h2 className='font-semibold text-xl'>{author_name}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBooksBtn(blog)} className='text-2xl ml-5'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className=''>#{hash}</span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 underline font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBooksBtn: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;