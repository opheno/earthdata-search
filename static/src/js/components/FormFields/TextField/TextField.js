import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextField extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    const { onChange } = this.props
    onChange(fieldName, fieldValue)
  }

  handleBlur(event) {
    const { onBlur } = this.props
    onBlur(event)
  }

  render() {
    const {
      classNames,
      name,
      value,
      placeholder
    } = this.props

    return (
      <label htmlFor="input__search-bar" className={classNames.label}>
        <span className={`visually-hidden ${classNames.labelSpan}`}>{placeholder}</span>
        <input
          id="input__search-bar"
          name={name}
          type="text"
          placeholder={placeholder}
          className={`${classNames.input}`}
          value={value}
          onBlur={this.handleBlur}
          // onKeyPress={this.handleKeypress}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}

TextField.defaultProps = {
  classNames: {
    input: null,
    label: null,
    labelSpan: null
  },
  placeholder: '',
  value: ''
}

TextField.propTypes = {
  classNames: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default TextField
