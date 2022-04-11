import React, { useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';

const AddVideoPage = () => {
    const naigate = useNavigate()
    const {id} = useParams()
    const [video , setVideo] = useState('')
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')

    const addPostHandler = async(e)=>{
        e.preventDefault()

        const formData = new FormData()

        formData.append('video',video)
        formData.append('title',title)
        formData.append('description',description)

        await axios.post('http://localhost:5000/api/videos/video', formData)
        naigate('/')
    }
    return (
        <div>
           <h1>Add Video</h1>
           <hr/>
           
           <form onSubmit={addPostHandler} method="post"  encType='multipart/form-data'>
               <input type="file"
               name='video'
               onChange={(e)=>setVideo(e.target.files[0])}
               /> 

               <input
               value={title}
                type="text"
                onChange={(e)=> setTitle(e.target.value)}
               />

               <input 
               value={description}
               as="textarea"
               onChange={(e)=> setDescription(e.target.value)}
               />
               <button>Add</button>
           </form>
        </div>
    );
};

export default AddVideoPage;