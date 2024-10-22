import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
            <div className='bg-gray-200 p-2 rounded-lg mt-4'>
                <h3>{title}</h3>
            </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmark;