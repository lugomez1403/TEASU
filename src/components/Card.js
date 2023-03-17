import * as React from 'react';
import "../App.css";
//import BasicModal from "../components/Modal"
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            // This is green.A700 as hex.
            main: blueGrey[800],
        },
    },
});

function CompCard(props) {
    const BackdropUnstyled = React.forwardRef((props, ref) => {
        const { open, className, ...other } = props;
        return (
            <div
                className={clsx({ 'MuiBackdrop-open': open }, className)}
                ref={ref}
                {...other}
            />
        );
    });

    BackdropUnstyled.propTypes = {
        className: PropTypes.string.isRequired,
        open: PropTypes.bool,
    };
    const Modal = styled(ModalUnstyled)(`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.MuiModal-hidden {
    visibility: hidden;
  }
`);

    const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

    const style = (theme) => ({
        width: 400,
        bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
        border: '2px solid currentColor',
        padding: '16px 32px 24px 32px',
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // var modalText = props.modal = "MS" ? "la mecanica de suelos..." : "tierra Fisica";
    return (
        <React.Fragment>
            <Modal
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: Backdrop }}
                keepMounted
            >
                <Box sx={style}>
                    <h2 id="keep-mounted-modal-title">{props.title}</h2>
                    <p id="keep-mounted-modal-description">{props.modal}</p>
                </Box>
            </Modal>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img className={props.clase} src={props.image} />
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <ThemeProvider theme={theme}>
                            <Button onClick={() => setOpen(true)} variant="text" color="primary" size="large" >
                                Conoce más ...</Button>
                        </ThemeProvider>


                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CompCard;