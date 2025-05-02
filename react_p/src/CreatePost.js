import React, { useState } from 'react';
import './css/CreatePost.css';
import axios from "axios";

let CreatePost = () => {

    let [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    let onChangeFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onClickSubmit = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/posts`, formData)
            .then(response => {
                console.log('게시글 등록 성공:', response.data);
            })
            .catch(error => {
                console.error('게시글 등록 실패:', error);
            });
    };

    return (
        <div className="create-post-container">
            <h1 className="create-post-title">게시글 작성</h1>
            <form className="create-post-form">
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input id="title" name="title" type="text" placeholder="제목을 입력하세요" onChange={onChangeFormData}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea id="content" name="content" placeholder="내용을 입력하세요" onChange={onChangeFormData}/>
                </div>
                <button type="button" className="submit-button" onClick={onClickSubmit}>등록</button>
            </form>
        </div>
    );
}

export default CreatePost;