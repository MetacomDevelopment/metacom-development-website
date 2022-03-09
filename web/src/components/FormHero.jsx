import React, { useState } from 'react';
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

const FormHero = ({ formName }) => {
  const [contact, setContact] = useState({
    fullName: '',
    // lastName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    type: '',
    // findUs: '',
    message: '',
  });

  const { fullName, email, phone, location, service, type, message } = contact;

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
    >
      {forms.map((form) => (
        <div>
          <div className="mb-6 space-y-6">
            <StyledHeadline
              className="text-center text-4xl font-bold"
              $color={accent?.default?.color}
            >
              {form.headline}
            </StyledHeadline>
            {/* <StyledBorder
              className="font-italic text-center text-xl text-zinc-100"
              $borderColor={accent?.light?.color}
            >
              <SanityBlockContent blocks={form._rawTagline} />
            </StyledBorder> */}
          </div>
          <input type="hidden" name="form-name" value={formName} />

          <Grid classes="gap-x-4 gap-y-4 lg:grid-cols-2">
            <Col>
              <input
                name="fullName"
                type="text"
                value={fullName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
            </Col>
            {/* <Col>
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
              />
            </Col> */}
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
                placeholder="Phone Number"
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
            <Col>
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
            </Col>
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

export default FormHero;
