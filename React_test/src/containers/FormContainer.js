import React, {Component} from 'react';
import TextInput from '../components/TextInput';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_fields: [{
                value: ''
            }]
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }
    handleInputField = (index) => (e) => {
        let new_field = false;

        const newFields = this.state.input_fields.map((item, inner_index) => {
            if (index === (this.state.input_fields.length - 1) && item.value.length > 0) {
                new_field = true;
            }

            if (index !== inner_index) {
                return item;
            }

            return { ...item, value: e.target.value };
        });

        this.setState({ input_fields: newFields });

        if (new_field === true) {
            this.setState({input_fields: this.state.input_fields.concat([{value: ''}])});
        }
    };
    eraseField = (index) => () => {
        this.setState({ input_fields: this.state.input_fields.filter((item, inner_index) => index !== inner_index) });
    };
    handleFormSubmit(e) {
        e.preventDefault();

        console.log('Sending post request with the following data:');
        console.log(this.state.input_fields);

        this.handleClearForm(e);
    }
    handleClearForm(e) {
        e.preventDefault();
        this.refs.form.reset();
        this.setState({
            input_fields: [{
                value: ''
            }]
        });
    }
    render() {
        return(
            <form onSubmit={this.handleFormSubmit} ref="form">
                {this.state.input_fields.map((item, index) => <TextInput
                    key={index}
                    inputType={'text'}
                    name={'field_' + index}
                    handleField={this.handleInputField(index)}
                    content={item.value}
                    removeField={this.eraseField(index)}
                    placeHolder="test attribute"
                />)}
                <div className="footer">
                    <input
                        type="submit"
                        className="submit-btn"
                        value="SAVE"
                    />
                    <button
                        className="cancel-btn"
                        onClick={this.handleClearForm}>CANCEL</button>
                </div>
            </form>
        );
    }
}

export default FormContainer;