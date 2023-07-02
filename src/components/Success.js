import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    render() {
        return (
            <MuiThemeProvider >
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar title="Success" />
                        <h1>Thank you for your submissions</h1>
                        <p>You will get an email with further instructions</p>

                    </Dialog>

                </>
            </MuiThemeProvider >
        )
    }
}

export default Success;
