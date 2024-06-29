import React from 'react';
import { Select, MenuItem } from '@mui/material';
import TextError from './TextError';
import { ErrorMessage } from 'formik';

function CustomizedSelectFormik({ options, form, field, disabled, userDefinedFunction = null }) {
    // console.log({field});
    const { name, value, onBlur } = field;
    const { setFieldValue } = form;
    // console.log(name, value, {options});
    return (
        <React.Fragment>
            <Select
                name={name}
                value={value}
                label={name}
                disabled={disabled}
                onBlur={onBlur}
                onChange={(e) => {
                    setFieldValue(name, e.target.value);
                    userDefinedFunction ? userDefinedFunction(e.target.value) : null;
                }}
            >
                {options
                    ? options.map((item) => {
                        return (
                            <MenuItem key={item.key} value={item.value}>
                                {item.text}
                            </MenuItem>
                        );
                    })
                    : null}
            </Select>
            <ErrorMessage component={TextError} name={name} />
        </React.Fragment>
    );
}

export default CustomizedSelectFormik;