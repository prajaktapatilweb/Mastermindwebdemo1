
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useField, useFormikContext } from 'formik';

const GoogleRecaptcha = () => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField('recaptcha');

  const handleRecaptchaChange = (value) => {
    setFieldValue('recaptcha', value);
  };

  return (
    <ReCAPTCHA
      sitekey="6LeniPkpAAAAACQxReSm_DpRnTGqxwtrqUilSRlq"
      onChange={handleRecaptchaChange}
    />
  );
};

export default GoogleRecaptcha;



