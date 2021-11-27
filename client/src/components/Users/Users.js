import React, { useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsersThunk} from "../../redux/actions/users-actions";
import Grid from "@mui/material/Grid";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import {SingleUser} from "./SingleUser/SingleUser";



export const Users = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [])


    const darkTheme = createTheme({palette: {mode: 'dark'}});
    return (
        <Box sx={{margin: '20px'}}>
            <ThemeProvider theme={darkTheme}>
                <Grid container spacing={2}>
                    {users.map((el, index) => {
                        return (
                            <Grid key={el._id} id={el._id} item xl={2} lg={3} md={4} sm={6} xs={12}>
                                <SingleUser name={el.name} age={el.age} index={index} _id={el._id}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </ThemeProvider>
        </Box>
    )
}