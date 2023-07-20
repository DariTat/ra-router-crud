import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditPost = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState();
    useEffect(() => {
        const fetchPost = async () => {
            try {
               const response = await fetch(`http://localhost:7070/posts/${params.id}`)
               const post = await response.json();
               setContent(post.post.content) 
            }
            catch (e) {
                console.log(e)
                setPost(undefined)
            } 
        } 
        fetchPost();
        
    },[params.id])

    const onChange = (e) => {
        setContent(e.target.value)
    }
    const onSend = (e) => {
        e.preventDefault();
        if (content === '') return;
        const post = {id: params.id, content: content};
        const fetchPost = async () => {
        try { 
            const response = fetch(`http://localhost:7070/posts/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(post)})
            if ((await response).ok) {
                navigate(`/posts/${params.id}`);
            } else {
                console.error('Failed to update post', (await response).statusText);
            }
            } catch (error) {
                console.log('Failed to send request:', error);
            }
        }
        fetchPost();
    }
    return (
        <div className="edit_post" onSubmit={onSend}>
            <div>Редактировать публикацию <Link to={`/posts/${params.id}`}>x</Link></div>
            <form>
                <input className='edit_input' type='text' name='content' value={content} onChange={onChange}/>
                <div className='edit_btn'>
                    <button>Фото/видео</button>
                    <button>Отметить друзей</button>
                    <button>Чувства/действия</button>
                    <button>Отметить посещение</button>
                    <button>GIF</button>
                </div>
                <button className="btn_safe" type='submit'>Сохранить</button>
            </form>
            

        </div>
    )

}

export default EditPost;