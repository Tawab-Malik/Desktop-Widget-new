import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Your Name" />
            <link rel="icon" href="/favicon.ico" />
            {/* Add any other meta tags you need here */}
        </Helmet>
    );
};

export default Meta;
