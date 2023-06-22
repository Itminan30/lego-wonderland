import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Lego Wonderland | Blog</title>
            </Helmet>
            <h2 className='text-center font-bold text-3xl my-5 border-t-2 border-b-2 p-3'>
                Blogs
            </h2>
            <div className='w-11/12 md:w-3/4 mx-auto my-10 space-y-10 border-t-2 border-b-2 p-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>
                            An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a user's device. Plenty of websites use access tokens. <br />
                            A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. <br />
                            The authentication server sends the access token and the refresh token to the client. The client stores the tokens in local storage or as a HTTP-only and secure cookie. The client sends the access token with each request to access protected resources.
                        </p>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <p>
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            What is express js? What is Nest JS?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            what is mongodb aggregate and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;