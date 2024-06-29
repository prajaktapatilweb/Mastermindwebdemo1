import React from 'react';
import { Typography, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';

const All = [
    { key: 1, text: 'Braces/ aligners', value: 'Braces/ aligners' },
    { key: 2, text: 'Dental implants', value: 'Dental implants' },
    { key: 3, text: 'Dental veneers (smile designing)', value: 'Dental veneers (smile designing)' },
    { key: 4, text: 'Full mouth rehabilitation', value: 'Full mouth rehabilitation' },
    { key: 5, text: 'Pediatric (kids dentistry)', value: 'Pediatric (kids dentistry)' },
    { key: 6, text: 'Root canal', value: 'Root canal' },
    { key: 7, text: 'Wisdom teeth extraction/ Teeth extraction', value: 'Wisdom teeth extraction/ Teeth extraction' },
    { key: 8, text: 'Other', value: 'Other' }
];
const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter valid email ID')
        .required('Email ID is required'),
    mobilenumber: yup
        .string()
        .required('Mobile Number is mandatory')
        .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
        .length(10, 'Only 10 digit mobile number'),
    selection: yup
        .string()
        .required('It is required'),
});

const Herocontacts = () => {
    const router = useRouter()
    const onSubmit = async (values, submitProps) => {
        console.log({ values })
        Axios.post("/api/nodemail", {
            // Axios.post("/api/sendemail", {
            name: values.name,
            email: values.email,
            mobileno: values.mobilenumber,
            msg: values.msg,
            selection: values.selection

        })
            .then(function (response) {
                //handle success
                // console.log('Success')
                router.push('/thankyou')
                submitProps.setSubmitting(false);
                submitProps.resetForm();
            })
            .catch(function (response) {
                // handle error
                console.log('Rrtt', response)
                alert("Error in submission. Please resubmit");
            });
    };

    return (
        // <Box id='contactform' sx={{ backgroundColor: '#f1efeb', py: { xs: 7, md: 7 } }}>
        //   <Container >

        <Card
            className='box2'
            sx={{
                backgroundColor: 'white',
                p: 5,
                borderRadius: 5,

                textAlign: 'center',
            }}>

            {/* <Box sx={{
          // backgroundColor: 'secondary.main',
          borderRadius: 10,
          py: { xs: 4, md: 10 },
          px: { xs: 4, md: 8 },
          textAlign: 'center',
        }}> */}
            <Formik
                validateOnChange={true}
                initialValues={{
                    name: '',
                    email: '',
                    mobilenumber: '',
                    msg: '',
                    selection: ''
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ initialValues, values, errors, isSubmitting }) => (
                    <Form style={{ textAlign: 'left' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <AppTextField
                                    placeholder='name'
                                    name='name'
                                    label='Name'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputBase-input': {
                                            fontSize: 14,
                                        },
                                    }}
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <AppTextField
                                    placeholder='Email'
                                    name='email'
                                    label='Email ID'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputBase-input': {
                                            fontSize: 14,
                                        },
                                    }}
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <AppTextField
                                    placeholder='Mobile Number'
                                    name='mobilenumber'
                                    label='Mobile Number'
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputBase-input': {
                                            fontSize: 14,
                                        },
                                    }}
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl
                                    sx={{
                                        width: '100%',
                                        // mt: 2,
                                        '&.MuiInputBase-input': { fontSize: 14 },
                                    }}
                                >
                                    <InputLabel id='demo-simple-select-label'>
                                        Select your interest
                                    </InputLabel>
                                    <Field
                                        name='selection'
                                        as='select'
                                        options={All}
                                        component={CustomizedSelectFormik}
                                    ></Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <Box sx={{ mb: { xs: 5, lg: 8 } }}>
                                    <AppTextField
                                        placeholder='Message'
                                        name='msg'
                                        label='Message'
                                        sx={{
                                            width: '100%',
                                            '& .MuiInputBase-input': {
                                                fontSize: 14,
                                            },
                                        }}
                                        variant='outlined'
                                        multiline
                                        rows='2'
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                        {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}

                        <div>
                            <Button
                                variant='contained'
                                color='primary'
                                disabled={isSubmitting}
                                sx={{
                                    // fontWeight: Fonts.REGULAR,
                                    textTransform: 'capitalize',
                                    fontSize: 16,
                                    minWidth: 160,
                                }}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            {/* <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
            width: { xs: '100%', md: 560 },
            mx: 'auto',
        }}>
            <InputBase sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            width: '100%',
            height: 48,
            px: 2,
            mr: { xs: 0, md: 3 },
            mb: { xs: 2, md: 0 },
        }} 
        placeholder="Enter your Email Address"></InputBase>
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={onSubmit} >
                Subscribe
              </StyledButton>
            </Box>
          </Box> */}
            {/* </Box> */}
        </Card>
        //   </Container>
        // </Box>
    );
};
export default Herocontacts;
