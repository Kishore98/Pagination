import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MyPosts from './MyPosts'
import NumberingPage from './NumberingPage';
function Pagination() {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(5);
    
   
    useEffect(()=>{
        
        const fetchPosts=async()=>{
            setLoading(true);
            const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response.data);
            setPosts(response.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])
    //getting currrent post
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

    //getting page
    const paginate=(pageNumber)=> setCurrentPage(pageNumber)
    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Blog</h1>
            <MyPosts myposts={currentPosts} myloading={loading} />
            <NumberingPage mypostsPerPage={postsPerPage} totalPosts={posts.length} pageChanger={paginate} />
        </div>
    )
}

export default Pagination
