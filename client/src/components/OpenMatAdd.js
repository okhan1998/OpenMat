import React, { useState } from 'react'
import { post } from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/OpenMatAdd.css';






function OpenMatAdd(props) {
    const [openmat, setOpenMat] = useState({
        file: null,
        location: '',
        title: '',
        description: '',
        star: '',
        price: '',
        fileName: '',
        open: false
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        addCustomer()
        .then(res => res.json())
        .then(data => console.log(data.message))
        
        .finally(() => props.stateRefresh());
            
        setOpenMat({
            ...openmat,
            file: null,
            location: '',
            title: '',
            description: '',
            star: '',
            price: '',
            fileName: '',
            open: false
            
        })
        
    }
    const handleClickOpen = () => {
        setOpenMat({
            ...openmat,
            open: true
        })
    }

    const handleClose = () => {
        setOpenMat({
            file: null,
            location: '',
            title: '',
            description: '',
            star: '',
            price: '',
            fileName: '',
            open: false
        })
    }

    const handleFileChange = (e) => {
        setOpenMat({
            ...openmat,
            file: e.target.files[0],
            fileName: e.target.value
        })
    }
    const handleValueChange = (e) => {
        const { value, name } = e.target;
        setOpenMat({
            ...openmat,
            [name]: value
        })
    }


    const addCustomer = () => {
        const url = '/openmat/api';
        const formData = new FormData();
        formData.append('img', openmat.file);
        formData.append('location', openmat.location);
        formData.append('title',openmat.title);
        formData.append('description',openmat.description);
        formData.append('price',openmat.price);
        formData.append('star', openmat.star);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    return ( 
        <div>
            <Button variant='text' color='success' onClick={handleClickOpen}>
                ???????????? ????????????
            </Button>
            <Dialog open={openmat.open} onClose={handleClose}>
                <DialogTitle>???????????? ??????</DialogTitle>
                <DialogContent>
                <input  accept="image/*" id="raised-button-file" type="file"  file={openmat.file} value={openmat.fileName} onChange={handleFileChange}/><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="success" component="span" name="file">
                                {openmat.fileName === "" ? "????????? ????????? ??????" : openmat.fileName}
                            </Button>
                        </label><br/><br/>
                        <TextField label="??????" type="text" name="location" value={openmat.location} onChange={handleValueChange}/><br/>
                        <TextField label="??????" type="text" name="title" value={openmat.title} onChange={handleValueChange}/><br/>
                        <TextField label="??????" type="text" name="description" value={openmat.description} onChange={handleValueChange}/><br/>
                        <TextField label="??????" type="text" name="price" value={openmat.price} onChange={handleValueChange}/><br/>
                        <TextField label="??????" type="text" name="star" value={openmat.star} onChange={handleValueChange}/><br/>
                </DialogContent>
                <DialogActions>
                        <Button variant="contained" color="success" onClick={handleFormSubmit}>??????</Button>
                        <Button variant="outlined" color="success" onClick={handleClose}>??????</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default  OpenMatAdd;
