import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';


const GetPosts = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:7070/posts');
                const posts = await response.json();
                setPosts(posts)
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchPosts();
    }, [])

    return (
        <>
            <div className='create'>
                <NavLink className='create-link' to='/posts/new'>Создать пост</NavLink>
            </div>
            <ul className='posts'>
                {posts.map((post) => (
                    
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h3>{post.content}</h3>
                            <div className='btn_post'>
                                <button>Нравится</button>
                                <button>Комментировать</button>
                            </div>
                            <input placeholder='Напишите комментарий...'/>
                        </Link>
                    </li>
                    
                )
                )}
            </ul>   
        </>
    )
} 

export default GetPosts;