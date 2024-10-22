import PropTypes from 'prop-types' 
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='w-1/3 bg-gray-400 ml-4 p-4 rounded-xl text-center'>
            <div>
                <h2 className='text-2xl font-bold p-4 bg-purple-100 rounded-xl text-purple-800'>Spent time on read : {readingTime} min</h2>
            </div>
            <h3 className='text-2xl font-bold mt-6'>Bookmark List No : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;