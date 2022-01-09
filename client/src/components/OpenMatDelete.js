import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function OpenMatDelete(props) {
    const [state, setState] = useState({
        open: false
    }) 
    function deletedOpenMat(id) {
        const url = '/openmat/api/' + id;
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(data => console.log(data.message))
        .finally(() => props.stateRefresh());

    }
    const handleClickOpen = () => {
        setState({
            ...state,
            open: true
        });
    }

    const handleClose = () => {
        setState({
            ...state,
            open: false
        })
    }

    return (
        <div>
            <Button variant="outlined" color="success" onClick={handleClickOpen}>삭제</Button>
            <Dialog open = {state.open} onClose={handleClose}>
                <DialogTitle onClose = {handleClose}>
                    삭제 경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        선택한 오픈매트가 삭제됩니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="success" onClick={(e) => {deletedOpenMat(props.id)}}>삭제</Button>
                    <Button variant="contained" color="success" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            {/* <button onClick={(e) => {deletedCustomer(props.id)}}>삭제</button> */}
        </div>  
    )
}

export default OpenMatDelete
