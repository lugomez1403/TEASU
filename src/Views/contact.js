import '../App.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
//import { orange } from '@mui/material/colors';
// import FilledInput from '@mui/material/FilledInput';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Contact() {
    return (
        <div >
            <div className="_1232"></div>

            <div className="component-3">
                <img className="rectangle-25" src="rectangle-25.png" />

                <div className="rectangle-29"></div>


                <div className="test-gmail-com">test@gmail.com</div>

                <MailIcon
                    className="ic-round-mail"
                    width="23"
                    height="23"
                    color="primary"
                    fontSize="small"
                />




                <div className="tel">(303) 555-0105</div>

                <PhoneAndroidIcon
                    className="ic-round-call"
                    width="23"
                    height="23"
                    color="primary"
                    fontSize="small"
                />



                <div className="_2715-ash-dr--san-jose--south-dakota-83475">
                    2715 Ash Dr. San Jose, South Dakota 83475
                </div>
                <LocationOnIcon
                    className="ic-round-location-on"
                    width="23"
                    height="23"
                    color="primary"
                    fontSize="small"
                />


                <div className="thank-you-for-contacting-us--you-will-get-an-answer-soon">
                    Thank you for contacting us! You will get an Answer soon
                </div>

                <div className="contact-us">Contacto</div>
                <div class="rectangle-30"></div>

                <div className="group-36">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField className="what-your-name" id="outlined-basic" label="Nombre" variant="filled" maxRows={1} />
                        <TextField className="e-mail-" id="filled-basic" label="E-mail" variant="filled" maxRows={1} />
                        <TextField className="number-phone-" id="standard-basic" label="Telefono" variant="filled" maxRows={1} />
                        <TextField className="message" id="standard-basic" label="Mensaje" variant="filled" maxRows={4} />

                    </Box>
                </div>


                <div className="group-39">
                    <Button className='submit' variant="contained">Contained</Button>
                </div>
            </div>



        </div >
    );
}

export default Contact;
