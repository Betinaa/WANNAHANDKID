import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
    

function  Visualizar_Publicacao() {
    const [posts, setPosts] = useState([]);
    const videos = 'http://localhost:3008/uploads/'

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3008/api/post/posts');
        if(response.data.success) {
            setPosts(response.data.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
        <Header/>

        {posts.map((post) => {
            return (
                <>                
                    <p>{post.id}</p>
                    <p>{post.legenda}</p>
                    <p>
                        <video 
                            controls="true" 
                            autoplay="true" 
                            width="300px" 
                            height="300px"
                            name="media">
                                <source src={videos + post.video} type="video/mp4"></source>
                        </video>
                        <video 
                            controls="true" 
                            autoplay="false"
                            name="media"
                            width="300px" 
                            height="300px"
                        >
                            <source src={videos + post.video} type="video/mp4"></source>
                        </video>
                    </p>
                </>
            )
        })}

        </>
    )
}
export default Visualizar_Publicacao