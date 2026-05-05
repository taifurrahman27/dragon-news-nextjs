import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center text-blue-500 py-20 text-xl">
            Loading...
            <span className="ml-4  loading loading-spinner  text-primary"></span>

        </div>
    );
};

export default Loading;