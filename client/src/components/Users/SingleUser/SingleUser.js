import React, {useEffect, useRef, useState} from 'react'
import './SingleUser.css'
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import {deleteUserThunk} from "../../../redux/actions/users-actions";
import {useDispatch} from "react-redux";
import TextField from "@mui/material/TextField";

let useClickOutside = (handler) => {
    let firstNode = useRef();
    let secondNode = useRef()

    useEffect(() => {
        let maybeHandler = (event) => {
            if (firstNode.current && !firstNode.current.contains(event.target) && secondNode.current && !secondNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return [firstNode, secondNode];
};

export const SingleUser = ({name, age, _id}) => {
    const [userEdit, setUserEdit] = useState(false)


    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()

    let [firstNode, secondNode] = useClickOutside(() => {
        setUserEdit(false)
    });

    return (
        <Paper sx={{
            position: 'relative',
            height: '128px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} variant="outlined">
            {
                loader ? <CircularProgress sx={{color: '#FFFFFFB3'}}/> :
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        {!userEdit ?
                            <div className='user-info'>
                                <Typography variant="h4" component="p">
                                    {name}
                                </Typography>
                                <Typography variant="h6" component="p">
                                    {age}
                                </Typography>
                            </div> :
                            <div ref={firstNode} className='edit-user-info'>
                                <TextField sx={{mb: '4px'}} size="small" id="outlined-basic" label="Name"
                                           variant="outlined"/>
                                <TextField size="small" id="outlined-basic" label="Age" variant="outlined"/>
                            </div>
                        }

                        <IconButton onClick={() => {
                            setLoader(true)
                            dispatch(deleteUserThunk(_id))
                        }} aria-label="delete" sx={{position: 'absolute', bottom: '2px', right: '2px'}}>
                            <DeleteIcon sx={{color: '#ff5a5a'}}/>
                        </IconButton>
                        {!userEdit ?
                            <IconButton onClick={() => setUserEdit(true)}
                                        sx={{position: 'absolute', bottom: '2px', left: '2px'}}>
                                <EditIcon sx={{color: '#00c4ff'}}/>
                            </IconButton> :
                            <IconButton ref={secondNode} sx={{position: 'absolute', bottom: '2px', left: '2px'}}>
                                <SaveIcon sx={{color: '#00c4ff'}}/>
                            </IconButton>}
                    </Box>
            }
        </Paper>
    )
}