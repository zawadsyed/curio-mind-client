import React from 'react';

const Blog = () => {
    return (
        <div className='w-96 mx-auto mt-24'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Cors?
                </div>
                <div className="collapse-content">
                    <p>CORS stands for Cross-Origin Resource Sharing. It is basically an HTTP-header based mechanism which allows a server to indicate any origins. It depends on a mechanism by which browser make a request to the server hosting the cross-origin resource for checking whether the server will permit the actual request or not.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are we using firebase? What are the options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p> We are using Google Firebase in authentication purpose. It helps us in developing high-quality apps, growwing user base, and earn more money. Each feature works independently, and they work even better together and as we know it is a product of Google, that means it is much more secured and reliable than other auth platforms.
                        We can also use - Auth0, mongoDb, Okta, Amazon Cognito etc for implementing authentication.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route works?
                </div>
                <div className="collapse-content">
                    <p>Private route is also called protected route as it is not accessable by every user. To access the private route user must have to be logged in, if the user is not logged in than he or she can not access that route but if the user is logged in to that website than he or she can access the route. This is the main concept of private route.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is node? How does it works?
                </div>
                <div className="collapse-content">
                    <p>  Node js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application.
                        It accepts the request from the clients and sends the response to server, while working with the request node.js handles them with a single thread.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;