import React from 'react';
import {Link} from 'react-router-dom';
import './NavbarItems.css';

const Home = () => {
    return (
        <div className="TopicContainer">
            <Link to="/different_countries">
                <div className="TopicItem">
                    <div className="TopicItemInner">
                        <div className="TopicItemFront">
                            <h2>Life in different countries</h2>
                        </div>
                        <div className="TopicItemBack">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/accommodation">
                <div className="TopicItem">
                    <div className="TopicItemInner">
                        <div className="TopicItemFront">
                            <h2>Accommodation</h2>
                        </div>
                        <div className="TopicItemBack">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/enjoy_travel">
                <div className="TopicItem">
                    <div className="TopicItemInner">
                        <div className="TopicItemFront">
                            <h2>Enjoy Your Travel</h2>
                        </div>
                        <div className="TopicItemBack">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Home;