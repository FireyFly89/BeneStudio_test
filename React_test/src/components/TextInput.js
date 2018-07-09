import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => (
    <div className="input-field">
        <div className={props.content.length > 0 ? "" : "empty"}>
            <input
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.content}
                onChange={props.handleField}
                placeholder={props.placeHolder}
            />
            {props.content.length > 0 &&
                <div>
                    <div
                        className="input-remove"
                        onClick={props.removeField}>&times;</div>
                    <label
                        htmlFor={props.name}>test attribute</label>
                </div>
            }
        </div>
    </div>
);

TextInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    name: PropTypes.string.isRequired,
    handleField: PropTypes.func.isRequired,
    placeHolder: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default TextInput;