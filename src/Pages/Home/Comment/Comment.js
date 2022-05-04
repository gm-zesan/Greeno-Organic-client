import React from "react";
import "./Comment.css";
const Comment = () => {
    const hanldeComment = (event) => {
        event.preventDefault();
    };
    return (
        <div className="comment-wrap col-lg-6 col-md-5 col-12 mx-auto">
            <h2>
                Leave a <span style={{ color: "#008037" }}>Comment</span>
            </h2>
            <form onSubmit={hanldeComment} id="algin-form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group fl_icon">
                            <div className="icon">
                                <i className="fa fa-user"></i>
                            </div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group fl_icon">
                            <div className="icon">
                                <i className="fa fa-envelope-o"></i>
                            </div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Your email"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <textarea
                        rows="5"
                        className="form-control"
                        placeholder="your text"
                    ></textarea>
                </div>
                <div className="form-group text-right mt-5">
                    <button style={{ width: "100%" }} className="btn-custom">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Comment;
