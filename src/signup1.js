import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import LockPersonIcon from '@mui/icons-material/LockPerson';
export default function Seller() {
    return(
        <>
        
      <Card sx={{ maxWidth: 900, marginTop: 5 }}>
        <CardContent>

          <LockPersonIcon />
          <Typography variant="h2" component="div">
            Enter the following details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            #need to write some text
          </Typography>
          <br />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            size='small'
            autoComplete='true'
            autoFocus
            sx={{ marginLeft: 0, width: 300 }}
          />

          <TextField
            id="surname"
            label="Surname"
            variant="outlined"
            size='small'
            autoComplete='true'
            autoFocus
            sx={{ marginLeft: 5, width: 300 }}
          />

          <br />
          <br />

          <TextField
            id="phoneno"
            label="Phone number"
            variant="outlined"
            multiline="true"
            size='small'
            autoComplete='true'
            autoFocus
            type='number'
            sx={{ marginLeft: 0, width: 650 }}
          />
          <br />
          <br />

          <TextField
            id="pass"
            label="Password"
            variant="outlined"
            multiline="true"
            size='small'
            autoComplete='true'
            autoFocus
            sx={{ marginLeft: 0, width: 650 }}
            type='password'
            
          />
          <br />
          <br />
        </CardContent>
        </Card>
        </>
    );
}