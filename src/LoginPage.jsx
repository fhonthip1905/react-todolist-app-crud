
import { Box, Card, Typography, Button, Divider, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

function LoginPage() {
    //setup useNavigate == link to page ที่สามารถกำหนดได้
    const navigate = useNavigate();

    //setup useState ของข้อมูลที่ต้องการจะจัดการ
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [password, setPassword] = useState("");

    //set Handler 
    //เมื่อมีการเปลี่ยนแปลงในช่องกรอก EmailOrMobile ข้อมูลจะถูกส่งมาเก็บที่ setEmailOrMobile
    const handleChangeEmailOrMobile = ( event ) => {
        // console.log(event.target.value);
        setEmailOrMobile(event.target.value);
    }

     //เมื่อมีการเปลี่ยนแปลงในช่องกรอก Password ข้อมูลจะถูกส่งมาเก็บที่ setPassword
    const handleChangePassword = ( event ) => {
        setPassword(event.target.value)
    }
  
    /* เมื่อมีเกิดเหตุการณ์ click จะทำการ preventDefault (ไม่ให้ reload)
        ทำการ  check condition ถ้าเป็น จริง จะทำการ link ไปยัง หน้า mytodo 
        ถ้าไม่ ก็จะ แสดงข้อความ Invalid email Or password ให้กรอกข้อมูลอีกครั้ง */
    const handleSubmitLogin = ( event ) => {
        event.preventDefault();
        if(emailOrMobile !== 'admin') {
            alert('Invalid Email Or Mobile');
        }else if(password !== '1234'){
            alert('Invalid Password');
        }else {
            alert('Welcome to todoList');
            navigate('/mytodo');
        }
    }
// UI : by MUI
  return (

    //สร้าง box จัดการ body form
         <Box component='form' display='flex' justifyContent='center' marginTop='40px' onSubmit={handleSubmitLogin}>
            <Card 
            sx={{
                p : 4,
                minWidth: 505, 
                minHeight: 650, 
                bgcolor:' #1E1F25'
            }}
            >
            {/* Text-header */}
            <Typography sx={{ fontSize: 56, fontWeight: 800 , color: "white"  }} color="text.secondary" gutterBottom>
            Wellcome
            </Typography>

            {/* input email-mmobile */}
            <TextField
            onChange={handleChangeEmailOrMobile}
            fullWidth
            type='text'
            variant='outlined'
            label='Email or Mobile'
            sx={{
                fontWeight: 600,
            }}
            
            />

            <Divider />

            {/* input password */}
            <TextField
            onChange={handleChangePassword}
            fullWidth
            type='text'
            variant='outlined'
            label= 'Password'
            sx={{
                fontWeight: 600,
            }}
            />

            <Divider />

            {/* ปุ่ม  login  */}
            <Button fullWidth variant='contained' type='submit'
            sx={{bgcolor: '#29292F'}}
            >Login
            </Button>
         
            <Divider  />
            </Card>
            </Box>
            
    
  )
}

export default LoginPage
