import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { Col, Grid, AnchorText, Button, SanityBlockContent } from '.';
import { useSanity } from '../hooks';

const StyledForm = styled.form`
  background-color: ${(props) => props.$bgColor};
`;

const StyledHeadline = styled.h2`
  color: ${(props) => props.$color} !important;
`;

const StyledBorder = styled.p`
  border-color: ${(props) => props.$borderColor};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const Form = ({ formName }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      service: '',
      // type: '',
      // findUs: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(1, 'Must be more than 1 character')
        .max(20, 'Must be 20 characters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .min(1, 'Must be more than 1 character')
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .required('Phone number is required')
        .matches(
          /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
          'Invalid phone number'
        ),
      location: Yup.string().required('Location is required'),
      service: Yup.string().required('Service is required'),
      // type: Yup.string()
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
      // findUs: Yup.string()
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { setSubmitting }) => {},
  });

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    // type: '',
    // findUs: '',
    message: '',
  });

  const { firstName, lastName, email, phone, location, service, message } =
    contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { primary, accent, forms } = useSanity();

  return (
    <StyledForm
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="relative mx-3 max-w-4xl rounded-xl p-3 shadow-xl lg:mx-auto lg:p-5"
      id={formName}
      $bgColor={primary?.dark?.color}
      onSubmit={formik.handleSubmit}
    >
      {forms.map((form) => (
        <div>
          <div className="mb-6 space-y-6">
            <StyledHeadline
              className="text-center text-4xl font-bold"
              $color={accent?.default?.color}
            >
              {form?.headline}
            </StyledHeadline>
            <StyledBorder
              className="font-italic text-center text-xl text-zinc-100"
              $borderColor={accent?.light?.color}
            >
              <SanityBlockContent blocks={form?._rawTagline} />
            </StyledBorder>
          </div>
          <input type="hidden" name="form-name" value={formName} />

          <Grid classes="gap-x-4 gap-y-4 lg:grid-cols-2">
            <Col>
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </Col>
            <Col>
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
              />
            </Col>
            <Col>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </Col>
            <Col>
              <input
                name="phone"
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </Col>
            <Col>
              <input
                name="location"
                type="text"
                value={location}
                onChange={handleChange}
                placeholder="Location"
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </Col>
            <Col>
              <select
                name="service"
                as="select"
                value={service}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              >
                <option value="" disabled hidden>
                  Service...
                </option>
                <option value="Solar Development">Solar Development</option>
                <option value="Waste Water Treatment Installation">
                  Waste Water Treatment Installation
                </option>
                <option value="Commercial Construction">
                  Commercial Construction
                </option>
                <option value="Excavation">Excavation</option>
              </select>
            </Col>
            {/* <Col>
              <select
                name="type"
                as="select"
                value={type}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              >
                <option value="" disabled hidden>
                  Type...
                </option>
                <option value="Solar Development">Solar Development</option>
                <option value="Waste Water Treatment Installation">
                  Waste Water Treatment Installation
                </option>
                <option value="Commercial Construction">
                  Commercial Construction
                </option>
                <option value="Excavation">Excavation</option>
              </select>
            </Col> */}
            {/* <Col classes="lg:col-span-2">
              <select
                name="findUs"
                as="select"
                value={findUs}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              >
                <option value="" disabled hidden>
                  How Did You Find Us?
                </option>
                <option value="Google">Google</option>
                <option value="Bing">Bing</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Directory (Yellowpages, etc.)">
                  Directory (Yellowpages, etc.)
                </option>
                <option value="Other">Other</option>
              </select>
            </Col> */}
            <Col classes="lg:col-span-2">
              <textarea
                name="message"
                rows="3"
                value={message}
                onChange={handleChange}
                placeholder="Please leave a detailed message..."
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </Col>
          </Grid>

          {/* <div className="text-zinc-100 text-sm my-10">
            <p className="italic">
              <span className="text-red-500">*</span> All fields required
            </p>
            <p className="italic">
              <span className="text-red-500">*</span> Your information will
              never be shared.
            </p>
          </div> */}
          <div className="mt-5 mb-3 text-center lg:mb-0">
            <Button linkType="form" label={form.buttonCta} />
          </div>
        </div>
      ))}
    </StyledForm>
  );
};

export default Form;
