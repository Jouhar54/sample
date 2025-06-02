import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../api/axiosInst';

const BlogCreate = () => {
    const [form, setForm] = useState({
        title: '',
        content: '',
        author: '',
    });

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = event => {
        setForm({ ...form, image: event.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await instance.post('blogs/123', form);
            if (res.status) {
                alert("Blog created!");
                navigate("/");
            }
            // console.log(res.data);
        } catch (error) {
            console.error("Error creating blog", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Blog</h2>
            <input type="text" name="title" onChange={handleChange} placeholder="Title" /><br />
            <textarea name="content" onChange={handleChange} placeholder="Content" /><br />
            <input type="text" name="author" onChange={handleChange} placeholder="Author" /><br />
            <input type="file" onChange={handleFileChange} /><br />
            <button type="submit">Create</button>
        </form>
    );
};

export default BlogCreate;