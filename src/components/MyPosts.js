import React from 'react'

function MyPosts({myloading,myposts}) {
    
    if(myloading){
        return <h2>Loading..</h2>
    }
    return (
        <div>
            <ul className='list-group mb-4'>
               {
                   myposts.map(post=>(
                       <li key={post.id} className='list-group-item'>{post.body}</li>
                   ))
               } 
            </ul>
            
        </div>
    )
}

export default MyPosts
