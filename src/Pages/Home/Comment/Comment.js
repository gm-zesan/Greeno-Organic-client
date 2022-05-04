import React from "react";
import "./Comment.css";
const Comment = () => {
    const hanldeComment = event => {
        event.preventDefault();
    }
    return (
        <div class="comment-wrap col-lg-6 col-md-5 col-12 mx-auto">
            <h2>
                Leave a <span style={{ color: "#008037" }}>Comment</span>
            </h2>
            <form onSubmit={hanldeComment} id="algin-form">
                <div className="row">
                    <div class="col-md-6">
                        <div class="form-group fl_icon">
                            <div class="icon">
                                <i class="fa fa-user"></i>
                            </div>
                            <input
                                class="form-input"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group fl_icon">
                            <div class="icon">
                                <i class="fa fa-envelope-o"></i>
                            </div>
                            <input
                                class="form-input"
                                type="text"
                                placeholder="Your email"
                            />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <textarea
                        rows="5"
                        class="form-control"
                        placeholder="your text"
                    ></textarea>
                </div>
                <div class="form-group text-right mt-5">
                    <button style={{width:"100%"}} class="btn-custom">Post Comment</button>
                </div>
            </form>
        </div>
    );
};

export default Comment;
