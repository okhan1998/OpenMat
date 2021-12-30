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

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addCustomer()
            .then((res) => {
                console.log(res.data);
                props.stateRefresh();
            })
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
                오픈맷 추가하기
            </Button>
            <Dialog open={openmat.open} onClose={handleClose}>
                <DialogTitle>오픈맷 추가</DialogTitle>
                <DialogContent>
                <input  accept="image/*" id="raised-button-file" type="file"  file={openmat.file} value={openmat.fileName} onChange={handleFileChange}/><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="success" component="span" name="file">
                                {openmat.fileName === "" ? "프로필 이미지 선택" : openmat.fileName}
                            </Button>
                        </label><br/><br/>
                        <TextField label="위치" type="text" name="location" value={openmat.location} onChange={handleValueChange}/><br/>
                        <TextField label="제목" type="text" name="title" value={openmat.title} onChange={handleValueChange}/><br/>
                        <TextField label="설명" type="text" name="description" value={openmat.description} onChange={handleValueChange}/><br/>
                        <TextField label="가격" type="text" name="price" value={openmat.price} onChange={handleValueChange}/><br/>
                        <TextField label="평점" type="text" name="star" value={openmat.star} onChange={handleValueChange}/><br/>
                </DialogContent>
                <DialogActions>
                        <Button variant="contained" color="success" onClick={handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="success" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            {/* <form onSubmit={handleFormSubmit}>
                <h1>오픈맷 추가</h1>
                프로필 이미지: <input type='file' name='file' file={openmat.file} value={openmat.fileName} onChange={handleFileChange}/><br/>
                위치: <input type='text' name='location' value={openmat.location} onChange={handleValueChange}/><br/>
                제목: <input type='text' name='title' value={openmat.title} onChange={handleValueChange}/><br/>
                설명: <input type='text' name='description' value={openmat.description} onChange={handleValueChange}/><br/>
                가격: <input type='text' name='price' value={openmat.price} onChange={handleValueChange}/><br/>
                평점: <input type='text' name='star' value={openmat.star} onChange={handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form> */}
        </div>
    )
}

export default  OpenMatAdd;
