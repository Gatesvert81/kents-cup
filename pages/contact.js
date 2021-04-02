import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { NavContext } from '../Component/MainComponents/Context'
import Button from '../Component/StyledComponents/Button'
import ContactWrapper from '../Component/StyledComponents/ContactWrapper'
import Form from '../Component/StyledComponents/Form'
import Iframe from '../Component/StyledComponents/Iframe'
import Input from '../Component/StyledComponents/Input'
import TextArea from '../Component/StyledComponents/TextArea'

function Contact() {
    const [nav, setNav] = useContext(NavContext)

    useEffect(() => {
        void
        setNav("contact")
        
    }, [])
    return (
        <ContactWrapper className="contact__page">
            <Head>
                <title>Kent's Cup | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactWrapper className="contact__page__head">
                Contact
            </ContactWrapper>
            <ContactWrapper className="contact__page__main">
                <Form className="contact__page__form" onSubmit={(e) => e.preventDefault()} >
                    <ContactWrapper className="contact__page__form__input">
                        <ContactWrapper className="contact__page__form__head" >
                            Contact Us 
                        </ContactWrapper>
                        <ContactWrapper className="contact__page__form__name__email">
                            <Input type="text" name="name" placeholder="Name" /> 
                            <Input type="email" name="email" placeholder="Email" />
                        </ContactWrapper>
                        <ContactWrapper className="contact__page__form__textarea">
                            <TextArea type="textarea" name="message" placeholder="Message" />
                        </ContactWrapper>
                    </ContactWrapper>
                    <ContactWrapper className="contact__page__form__btn">
                        <Button type="submit" className="form__btn">
                            Send Message
                        </Button>
                    </ContactWrapper>

                </Form>
            </ContactWrapper>
            <ContactWrapper className="location__head" >
                Locate Us
            </ContactWrapper>
            <ContactWrapper className="contact__page__location__section">
                <ContactWrapper className="contact__page__location__grid">
                    <ContactWrapper className="contact__page__location__head">
                        Accra Branch
                    </ContactWrapper>
                    <ContactWrapper className="contact__page__location">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2493000446807!2d-0.19397268555215147!3d5.677057333999292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d3d7f3728c7%3A0x581a9725824bb46e!2sEcowas%20PlayBoy%20Mansion!5e0!3m2!1sen!2sgh!4v1616986883179!5m2!1sen!2sgh" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></Iframe>
                    </ContactWrapper>
                </ContactWrapper>
                <ContactWrapper className="contact__page__location__grid">
                    <ContactWrapper className="contact__page__location__head" >
                        Kumasi Branch
                    </ContactWrapper>
                    <ContactWrapper className="contact__page__location">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7846590687345!2d-1.6097354855501005!3d6.673582423252645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97539b52208f%3A0x103af58c4987fce0!2sKents%20Cup%20-%20Kumasi!5e0!3m2!1sen!2sgh!4v1616987643502!5m2!1sen!2sgh" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></Iframe>
                    </ContactWrapper>
                </ContactWrapper>
            </ContactWrapper>
        </ContactWrapper>
    )
}

export default Contact
