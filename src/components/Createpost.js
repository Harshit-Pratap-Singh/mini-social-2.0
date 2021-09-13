import React,{ useState } from 'react'
import { useHistory } from 'react-router'
import { useStateValue } from '../StateProvider';
import './Createpost.css';

function Createpost() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [{auth}, dispatch] = useStateValue();

    if(!auth)history.push('/errr');

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_POST',
            title: title,
            description: description
        })
        history.push('/userhome');
    }
    return (
        <div className='createpost'>
            <div className="createpost__title">
                <h1>Post</h1>
            </div>
            <div className="createpost__box">
                <form >
                    <h3>Title</h3>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                    <h3>Description</h3>
                    <textarea cols={20} rows={5} onChange={e => setDescription(e.target.value)} value={description} />
                    <button type='submit' onClick={handleClick}>Create</button>
                    <button onClick={() => history.push('/posts')}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Createpost
