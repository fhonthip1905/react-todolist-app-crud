
import { List ,ListItem, ListItemButton, ListItemIcon, Checkbox , IconButton, ListItemText, responsiveFontSizes } from '@mui/material';
import { Box, Card, Typography, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

//scema {title : string,status: boolean"}
   
function MytodoPage() {

    const [ task, setTask ] = useState (['']);
    const [ newtask, setNewTask] = useState('');

    useEffect(() => {
        getAlltask();
    },[])

    //FN : Get all data
    async function getAlltask(){
        try{
            const response = await axios.get('https://cc17-assessment-api.onrender.com/v1/todo?userId=11')
            // console.log(response.data);
            setTask(response.data.data);
        }
        catch(error){
            console.log(error)
        }
    }

    //Handler change input 
    const handleChangeTask = (input) => {
        input.preventDefault();
        setNewTask(input.target.value);
    }

    //FN : Create Task
    const createTask = async (event) => {
        event.preventDefault();
        const taskData = { title : newtask }
        try{
             let response = await axios.post('https://cc17-assessment-api.onrender.com/v1/todo?userId=11',taskData)
             setTask([response.data.data.title, ...task]);
             setNewTask(" ");
             console.log([response.data.data.title, ...task])
        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <Box 
         component='form' 
         display='flex' 
         justifyContent='center' 
         marginTop='40px' 
         onSubmit={createTask}
    >
        <Card 
            sx={{
                p : 4,
                minWidth: 505, 
                minHeight: 650, 
                bgcolor:' #1E1F25',
                color: "white"
            }}
            >
                {/* Text-header */}
            <Typography 
            sx={{ 
            fontSize: 56, 
            fontWeight: 800 , 
            color: "white"  
            }} 
            color="text.secondary" 
            gutterBottom>
            Wellcome
            </Typography>

            {/* input email-mmobile */}
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                marginTop: 5,
                color: '#9494B8'
            }}
            >New Task</Typography>
            <TextField
            sx={{ input: { color: 'white', fontSize: 20 } }}
            onChange={handleChangeTask}
            fullWidth
            type='text'
            variant='outlined'
            value={newtask}
            />

            <List sx={{ width: '100%', marginTop: 5,maxWidth: 360 }}>
            {task.map((value,id) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                <ListItem
                    key={id}
                    secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        
                    </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton  dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value.title} />
                    </ListItemButton>
                </ListItem>
                );
            })}
        </List>

        {/* ปุ่ม  logout  */}
        <Button href='/' fullWidth variant='contained' type='button'
            sx={{
                bgcolor: '#29292F',
                marginTop: 10,
                height: 62,
                fontSize: 24,
                fontWeight: 800
            }}
            >LOG OUT
            </Button>
        </Card>
    </Box>
  );
}

export default MytodoPage;