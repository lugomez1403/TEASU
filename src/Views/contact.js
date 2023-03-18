import React from 'react';
import '../App.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import AlertTitle from "@mui/material/AlertTitle";
import Dialog from "@mui/material/Dialog";


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
      text-align: center;
      
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
        this.state = {
            open: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: '',
            alert: false,
            errormsg: ''
        };
        this.EnvioMail = this.EnvioMail.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleClickAlert = this.handleClickAlert.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value })
    }
    handleChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    handleChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    handleChangeMessage(e) {
        this.setState({ message: e.target.value })
    }

    EnvioMail(e) {
        e.preventDefault();
        let errors = this.validateLoginForm();

        if (errors === true) {
            console.log("EROOOR")
        } else {
            if (errors.name) {
                this.setState({
                    alert: true,
                    errormsg: errors.name
                });
            }
            if (errors.email) {
                this.setState({
                    alert: true,
                    errormsg: errors.email
                });
                //alert(errors.email);
            }
            if (errors.phone) {
                this.setState({
                    alert: true,
                    errormsg: errors.phone
                });
            }
            if (errors.message) {
                this.setState({
                    alert: true,
                    errormsg: errors.message
                });
            }
            return
        }
        emailjs.sendForm('service_op0hytd', 'template_fbxk7kh', e.target, 'I-Zq9xxK6ddg762ub').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.setState({
                open: true
            });
            e.target.reset();
        }, (err) => {
            console.log('FAILED...', err);

        });

    }

    validateLoginForm = () => {

        let errors = {};
        console.log("1", this.state.email);
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (!this.state.name) {
            errors.name = "El nombre no puede estar vacio";
            return errors;
        }
        if (!this.state.email) {
            console.log("2")
            errors.email = "Email no puede estar vacio";
            return errors;
        } else if (!emailRegex.test(this.state.email)) {
            errors.email = "por favor introdusca un email valido";
            return errors;
        }
        if (!this.state.phone) {
            errors.phone = "El telefono no puede estar vacio";
            return errors;
        }
        if (!this.state.message) {
            errors.message = "El mensaje no puede estar vacio";
            return errors;
        }

        return true;
    }

    handleClick() {
        this.setState({
            open: false
        });
    };
    handleClickAlert() {
        this.setState({
            alert: false
        });
    };
    render() {
        return (
            <React.Fragment>
                <Dialog open={this.state.open} onClose={this.handleClick}>
                    <Alert
                        severity="success"
                        color="success"
                        role="button"
                        onClose={this.handleClick}
                        closeText="Doesn't Work!"
                        sx={{
                            "& .MuiAlert-icon": {
                                color: "green"
                            }
                        }}
                    >
                        <AlertTitle>Succes!</AlertTitle>
                        ¡Mensaje enviado!
                        En breve nos comunicaremos.
                    </Alert>
                </Dialog>
                <Dialog open={this.state.alert} onClose={this.handleClickAlert}>
                    <Alert
                        severity="error"
                        color="error"
                        role="button"
                        onClose={this.handleClickAlert}
                        closeText="Doesn't Work!"
                        sx={{
                            "& .MuiAlert-icon": {
                                color: "red"
                            }
                        }}
                    >
                        <AlertTitle>Danger!</AlertTitle>
                        {this.state.errormsg}
                    </Alert>
                </Dialog>

                <div >
                    <div className="_1232"></div>

                    <div className="component-3">
                        <img className="rectangle-25" src="rectangle-25.png" />

                        <div className="rectangle-29"></div>
                        <div className="contact-us">Contacto</div>

                        <div className="test-gmail-com">teasutecnologiaaplicada@gmail.com</div>

                        <MailIcon
                            className="ic-round-mail"
                            width="23"
                            height="23"
                            color="primary"
                            fontSize="small"
                        />

                        <div className="tel">(998) 376-0472</div>

                        <PhoneAndroidIcon
                            className="ic-round-call"
                            width="23"
                            height="23"
                            color="primary"
                            fontSize="small"
                        />
                        <div className="tel2">(998) 137-0108</div>

                        <PhoneAndroidIcon
                            className="ic-round-call2"
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
                                <TextField className="what-your-name" name="name" id="name" label="Nombre" variant="filled" maxRows={1} size="small" value={this.state.name} onChange={this.handleChangeName} required />
                                <TextField className="e-mail-" name="mail" id="mail" label="E-mail" variant="filled" maxRows={1} size="small" value={this.state.email} onChange={this.handleChangeEmail} required />
                                <TextField className="number-phone-" name="phone" id="subject" label="Telefono" variant="filled" maxRows={1} size="small" value={this.state.phone} onChange={this.handleChangePhone} required />
                                <TextField className="message" name="message" id="message" label="Mensaje" variant="filled" maxRows={4} size="small" value={this.state.message} onChange={this.handleChangeMessage} required />
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
            </React.Fragment>
        );
    }
}


export default Contact;