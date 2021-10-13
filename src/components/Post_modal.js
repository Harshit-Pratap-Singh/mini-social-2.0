import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
import { useStateValue } from '../StateProvider';

const Post_modal = (props) => {
    const[{auth},dispatch]=useStateValue();
    const [isFilled, setIsFilled] = useState(false);
    const [title, setTitle] = useState("");
    const [thoughts, setThoughts] = useState('');
   
    const handleClick = () => {
        dispatch({
            type: "ADD_POST",
            title:title,
            description:thoughts,
        });
        setTitle('');
        setThoughts('');
        props.toggle();
    }

    return (
        <>
            <Modal isOpen={props.modal} toggle={props.toggle}  centered={true}>
                <ModalHeader toggle={props.toggle} cssModule={{'modal-title': 'w-100 text-center'}}>Create Post</ModalHeader>
                <ModalBody>
                    <Input type='text'
                        name="title"
                        placeholder="Title"
                        onChange={(e) => {
                            setTitle(e.target.value)
                            if (title && thoughts) setIsFilled(true);
                            else setIsFilled(false);
                        }}
                        value={title}
                        className='mb-2'
                    />
                    <Input type='textarea'
                        name='thoughts'
                        placeholder="What's on your mind ?"
                        onChange={(e) => {
                            setThoughts(e.target.value)
                            if (title && thoughts) setIsFilled(true);
                            else setIsFilled(false);
                        }}
                        value={thoughts}
                        rows={8}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleClick} block size='lg' disabled={!isFilled}>Post</Button>
                    {/* <Button color='secondary' onClick={toggle}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
            </>
    );
}

export default Post_modal;