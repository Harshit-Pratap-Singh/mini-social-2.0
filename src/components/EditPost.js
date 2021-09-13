import React ,{ useState } from 'react'
import { useHistory } from 'react-router'
import { useStateValue } from '../StateProvider';
import './EditPost.css';

function EditPost({match}) {
    const history = useHistory();
    const [{ posts }, dispatch] = useStateValue();
    const[{auth}]=useStateValue();
    if(!auth)history.push('/errr');
    const postToEdit=posts.filter((post)=> post.id === parseInt(match.params.id))[0];

    const [title, setTitle] = useState(postToEdit.title);
    const [description, setDescription] = useState(postToEdit.description);

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_POST',
            id:postToEdit.id,
            title: title,
            description: description
        })
        history.push('/userhome');
    }            
    return (
        <div className='editpost'>
        <div className="editpost__title">
            <h1>Edit Post</h1>
        </div>
        <div className="editpost__box">
            <form >
                <h3>Title</h3>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                <h3>Description</h3>
                <textarea cols={20} rows={5} onChange={e => setDescription(e.target.value)} value={description} />
                <button type='submit' onClick={handleClick}>Done</button>
                <button onClick={() => history.push('/posts')}>Cancel</button>
            </form>
        </div>
    </div>
    )
}

export default EditPost
