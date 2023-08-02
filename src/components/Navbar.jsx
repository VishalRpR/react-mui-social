import styled from '@emotion/styled'
import { Mail, Notifications, Whatshot } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, } from '@mui/material'


import React, { useState } from 'react'

const StyledToolbar= styled(Toolbar)({
   display:"flex",
   justifyContent:"space-between"
})

const Search=styled("div")(({theme})=>({
   backgroundColor:"white",
   padding:"0 10px",
   width:"40%",
  borderRadius:theme.shape.borderRadius
   

}))

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const Userbox= styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));






const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>VISH VI</Typography>
        <Whatshot  sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
            <Mail/>
        </Badge>

        <Badge badgeContent={4} color="error">
            <Notifications/>
        </Badge>
        <Avatar sx={{width:"30px",height:"30px"}} onClick={e=>setOpen(true)} src="https://images.app.goo.gl/Z84rkN6Papqgw1f89"></Avatar>

        </Icons>
        <Userbox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:"30px",height:"30px"}}  src="https://images.app.goo.gl/Z84rkN6Papqgw1f89">
        </Avatar>
        <Typography variant='span'>
           vishal
        </Typography>
        </Userbox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={e=>setOpen(false)}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyledToolbar>
   
    </AppBar>
  )
}

export default Navbar
