import React from 'react'
import { Alert } from '@mui/material'
import { Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from "../store/ui-slice";


function Notification({ type, message}) {

    const notification = useSelector((state) => state.ui.notification)
    const dispatch = useDispatch()

    const vertical = 'top' 
    const horizontal = 'center' 


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        dispatch(uiActions.hideNotification())
      }
      dispatch(uiActions.hideNotification())
    };
        
    return (
        <div>
            <Snackbar open={notification.open} autoHideDuration={3000} onClose={handleClose}
             anchorOrigin={{ vertical, horizontal }}>
                <Alert severity={type} onClose={handleClose} >{message}</Alert>
            </Snackbar>
        </div>
    )
}

export default Notification