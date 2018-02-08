import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Placeholder extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <section>
                    <h3> Pardon the dust!</h3>
                        <p id = "dust"> These pages are just placeholders. If this project went live it would have an integrated profile and about page! </p>
                </section>
            </MuiThemeProvider>
        );
    }
}

export default Placeholder;