import { useEffect,  useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PutPost = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    console.log(post)
    useEffect(() => {
        const fetchPost = async () => {
            try {
               const response = await fetch(`http://localhost:7070/posts/${params.id}`)
               const post = await response.json();
               setError(false);
               setPost(post.post) 
            }
            catch (e) {
                console.log(e)
                setError(true);
                setPost(undefined)
            } 
        } 
        fetchPost();
        
    },[])
    
    if (error) return (
        <div>Не найдено, перейти на <Link to='/'>главную</Link></div>
    )
    
    function onDelete(id) {
        fetch(`http://localhost:7070/posts/${id}`, { method: 'DELETE'})
        .then(() => 
            navigate('/')
        )
    }
    function onEdit() {
        navigate(`/posts/edit/${post.id}`)
    }
    function onCancell() {
        navigate('/')
    }
    return (
        <>
        <div className="post" key={post.id}>
        <h3>{post.content}</h3>
            <div className='btn_post'>
                <button>Нравится</button>
                <button>Комментировать</button>
            </div>
            <div className="btn">
                <button className="cancell" onClick={() => onCancell()}>Отмена</button>
                <button className="change" onClick={() => onEdit()}>Изменить</button>
                <button className="delete" onClick={() => onDelete(post.id)}>Удалить</button>
                
            </div>
        </div>
        </>
    )

}

export default PutPost;