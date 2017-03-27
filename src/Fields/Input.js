import React from 'react'
import cx from 'classnames'

const Input = props => {
    return (
        <div className={cx('form-group', {'has-warning': (props.originalValue)})}>
            {(props.label) ? <label className="form-control-label" htmlFor="inputSuccess1">{props.label}</label> : ''}
            <input
                type={props.type}
                value={props.value}
                name={props.full_name}
                data-name={props.name}
                id={props.id}
                className={cx('form-control', props.className, {'form-control-warning': (props.originalValue)})}
                placeholder={props.placeholder}
                onChange={(e) => props.changeHandler(e)}
            />
            {(props.originalValue) ? <small className="form-text text-muted text-warning">This field has unsaved value.</small> : ''}
        </div>
    )
};

Input.propTypes = {
    type: React.PropTypes.oneOf(['input', 'text', 'hidden', 'checkbox', 'radio']).isRequired,
    value: React.PropTypes.string.isRequired,
    full_name: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    changeHandler: React.PropTypes.func,
    label: React.PropTypes.string,
    originalValue: React.PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    value: '',
    changeHandler: () => { return null }
};

export default Input;