import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react'



const CreatePost = () => {
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleContent = (e) => {
        const {value} = e.target;
        setContent(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (content === '') return;
        const post = {id: 0, content: content};
        fetch("http://localhost:7070/posts", { method: 'POST', 
          body: JSON.stringify(post)})
        setContent('');
        navigate('/'); 
    }

    return(
        <>
        <form className="add_post" onSubmit={handleSubmit} >
            <NavLink to='/'>X</NavLink>
            <input type='text' name='content' value={content} onChange={handleContent}/>
            <button type="submit">Опубликовать</button>
        </form>
        </>
        
    )

}
export default CreatePost;