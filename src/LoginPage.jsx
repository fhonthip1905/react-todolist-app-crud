
import { Box, Card, Typography, Button, Divider } from "@mui/material"

function LoginPage() {
  return (
  
         <Box display='flex' justifyContent='center' marginTop='40px'>
         
            <Card 
            component='card_body'
            sx={{
                p : 4,
                minWidth: 505, 
                minHeight: 650, 
                bgcolor:' #1E1F25'
            }}
            >
            <Typography sx={{ fontSize: 56, fontWeight: 800 , color: "white"  }} color="text.secondary" gutterBottom>
            Wellcome
            </Typography>

           
            
            <Button 
            fullWidth
            variant='outline' 
            color='primary'
            sx={{
                fontWeight: 600,
            }}
            >Email or Mobile
            </Button>
            <Divider />
            <Button 
            fullWidth
            variant='outline' 
            color='primary'
            sx={{
                fontWeight: 600,
            }}
            >Password
            </Button>
            <Divider />
            <Button fullWidth variant='contained' type='submit'
            sx={{bgcolor: '#29292F'}}
            >Login</Button>
         
            <Divider  />
            </Card>
            </Box>
            
    
  )
}

export default LoginPage
