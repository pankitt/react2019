import React, { Component, Fragment } from "react";

class Columns extends React.Component {
    render() {
        return (
            <Fragment>
                <td>One</td>
                <td>Two</td>
            </Fragment>
        );
    }
}

class NewClass extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default NewClass;