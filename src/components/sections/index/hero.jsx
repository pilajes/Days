// Hero.js

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';

import space from '../../utils/spacing';

import HeroBg from '../../blocks/hero.bg/section-bg-color';

import hero from '../../../styles/scss/sections/index/hero.module.scss';
import button from '../../../styles/scss/blocks/button.module.scss';

import content from '../../../content/index/hero.json';
import EmailModal from './EmailModal.jsx';

export default function Hero() {
    const [, setTypingStatus] = useState('Initializing');
    const [isHiremeTooltipVisible, setIsHiremeTooltipVisible] = useState(false);
    const [isYescatTooltipVisible, setIsYescatTooltipVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (email) => {
        // Call backend API to save the email to MongoDB
        fetch('/api/add-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        }).then(() => {
            alert('Email added successfully!');
            closeModal();
        }).catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };

    return (
        <Section classProp={`${hero.section}`}>
            <Container spacing={'VerticalXXXL'}>
                <section>
                    <h1 className={hero.header}>{content.header.name}</h1>
                    <h1 className={`${hero.header} ${hero.primaryDim}`}>{content.header.usp}</h1>
                </section>
                <section>
                    <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
                        {content.paragraph}
                    </p>
                </section>
                <section style={{ position: 'relative' }}>
                    <div style={{ textAlign: 'center' }}>
                        <button
                            className={`button ${button.primary}`}
                            onClick={openModal}
                            onMouseEnter={() => setIsHiremeTooltipVisible(true)}
                            onMouseLeave={() => setIsHiremeTooltipVisible(false)}
                        >
                            {content.buttons.primary.title}
                        </button>
                    </div>
                    {isHiremeTooltipVisible && (
                        <div className={`${hero.tooltipContent} ${hero.hireme_tooltip}`}>
                            <Image src="/gif/hireme.gif" width={100} height={100} alt="Yescat GIF" />
                        </div>
                    )}
                    {isYescatTooltipVisible && (
                        <div className={`${hero.tooltipContent} ${hero.yescat_tooltip}`}>
                            <Image src="/gif/yes.gif" width={100} height={100} alt="GIF" />
                        </div>
                    )}
                    <EmailModal isOpen={isModalOpen} closeModal={closeModal} handleSubmit={handleSubmit} />
                </section>
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    );
}
