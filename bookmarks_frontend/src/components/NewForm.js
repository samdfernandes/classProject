import axios from 'axios';
import React from 'react';

let baseURL = 'http://localhost:3003'

console.log('current baseURL:', baseURL)


class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            link: "",
            description:"",
        }
    }
}

export default NewForm;