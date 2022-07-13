import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice';

const AddPostsForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostsClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )

            setTitle("")
            setContent("")
        }
    }

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type="text"
                    id='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor='postContent'>Post Content:</label>
                <textarea
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type='button'
                    onClick={onSavePostsClicked}
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostsForm;