import ReactDOM from 'react-dom';
import React from 'react';
import '../App.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
//import LocationOnIcon from '@mui/icons-material/LocationOn';
//import { orange } from '@mui/material/colors';
// import FilledInput from '@mui/material/FilledInput';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import FormControl from '@mui/material/FormControl';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';

const orange = {
    500: '#bd5215',
    600: '#7a350d',
    700: '#b1400b',
};

const CustomButton = styled(ButtonUnstyled)`
      background-color: ${orange[500]};
      padding: 22px 54px;
      border-radius: 12px;
      color: white;
      transition: all 150ms ease;
      cursor: pointer;
      border: none;
      
      &:hover {
        background-color: ${orange[600]};
      }
    
      &.${buttonUnstyledClasses.active} {
        background-color: ${orange[700]};
      }
    
      &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
      }
    
      &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.EnvioMail = this.EnvioMail.bind(this);
    }

    EnvioMail(e) {
        e.preventDefault();
        emailjs.sendForm('service_op0hytd', 'template_fbxk7kh', e.target, 'I-Zq9xxK6ddg762ub').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

    }

    render() {
        return (
            <div >
                <div className="_1232"></div>

                <div className="component-3">
                    <img className="rectangle-25" src="rectangle-25.png" />

                    <div className="rectangle-29"></div>
                    <div className="contact-us">Contacto</div>

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

                    <div className="thank-you">
                        Gracias por contactarte con nosotros
                    </div>


                    <div className="rectangle-30"></div>

                    <div className="group-36">
                        {/* <FormControl
                        action="enviar.php"
                        method="post" sx={{
                            '& .MuiTextField-root': { width: '35ch' },
                        }}>
                        <TextField className="what-your-name" name="name" id="name" label="Nombre" variant="filled" maxRows={1} size="small" />
                        <TextField className="e-mail-" name="mail" id="mail" label="E-mail" variant="filled" maxRows={1} size="small" />
                        <TextField className="number-phone-" name="phone" id="subject" label="Telefono" variant="filled" maxRows={1} size="small" />
                        <TextField className="message" name="message" id="message" label="Mensaje" variant="filled" maxRows={4} size="small" />

                        <Button className='submit' variant="contained" type="submit" >Enviar</Button>


                        <CustomButton className='submit' type="button">Enviar</CustomButton>

                    </FormControl> */}

                        <Box
                            onSubmit={this.EnvioMail}
                            method="post"
                            component="form"
                            sx={{ '& .MuiTextField-root': { width: '35ch' }, }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField className="what-your-name" name="name" id="name" label="Nombre" variant="filled" maxRows={1} size="small" />
                            <TextField className="e-mail-" name="mail" id="mail" label="E-mail" variant="filled" maxRows={1} size="small" />
                            <TextField className="number-phone-" name="phone" id="subject" label="Telefono" variant="filled" maxRows={1} size="small" />
                            <TextField className="message" name="message" id="message" label="Mensaje" variant="filled" maxRows={4} size="small" />
                            <div className="group-39">
                                {/* <ThemeProvider theme={theme}> */}
                                {/* <Button className='submit' variant="contained" type="submit">Enviar</Button> */}
                                <CustomButton className='submit' type="submit" >Enviar</CustomButton>
                                {/* </ThemeProvider> */}
                            </div>
                        </Box>
                    </div>
                </div>
            </div >
        );
    }
}


export default Contact;