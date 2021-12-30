import React, { useState } from 'react'
import { post } from 'axios';


function OpenMatAdd(props) {
    const [openmat, setOpenMat] = useState({
        file: null,
        location: '',
        title: '',
        description: '',
        star: '',
        price: '',
        fileName: ''
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
            fileName: ''
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
            <form onSubmit={handleFormSubmit}>
                <h1>오픈맷 추가</h1>
                프로필 이미지: <input type='file' name='file' file={openmat.file} value={openmat.fileName} onChange={handleFileChange}/><br/>
                위치: <input type='text' name='location' value={openmat.location} onChange={handleValueChange}/><br/>
                제목: <input type='text' name='title' value={openmat.title} onChange={handleValueChange}/><br/>
                설명: <input type='text' name='description' value={openmat.description} onChange={handleValueChange}/><br/>
                가격: <input type='text' name='price' value={openmat.price} onChange={handleValueChange}/><br/>
                평점: <input type='text' name='star' value={openmat.star} onChange={handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        </div>
    )
}

export default OpenMatAdd
