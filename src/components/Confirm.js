import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    };
    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>

                    <AppBar title="Confirm" />
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="First Name"
                                secondary={firstName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name"
                                secondary={lastName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="email"
                                secondary={email} />
                        </ListItem>


                        <ListItem>
                            <ListItemText primary="Occupation"
                                secondary={occupation} />
                        </ListItem>


                        <ListItem>

                            <ListItemText primary="City"
                                secondary={city} />
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Bio"
                                secondary={bio} />
                        </ListItem>

                    </List>
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.back}
                    >back</Button>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.continue}
                    >Confirm & Continue</Button>
                    
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
export default Confirm
