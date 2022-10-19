import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://t3.ftcdn.net/jpg/03/47/11/88/360_F_347118877_XGwODDXk6GrXMTaqbwssjTB60lysPdrm.jpg"
                 alt="/"/>
            {props.post}


            <div>
                <span>like</span>
                {props.likesCount}
            </div>

        </div>
    )
}


export default Post;