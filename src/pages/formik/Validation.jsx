import React from 'react';
import { Formik } from 'formik';
import instance from '../../api/axiosInst';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required')
        .matches(/^[A-Z]/, 'First letter must be uppercase'),
});

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}

            validationSchema={SignupSchema}

            onSubmit={async (values, { setSubmitting }) => {
                await instance.post('login/', values)
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && <div className='text-red-500'>{errors.email}</div>}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder='Password'
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button className='bg-green-400 p-1 rounded-lg ml-1' type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default Basic;