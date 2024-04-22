import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import hero from '../../../styles/scss/sections/index/hero.module.scss';
import content from '../../../content/index/hero.json';
import looking from '../../../styles/scss/sections/index/looking.module.scss';
import section from '../../../styles/scss/blocks/section.title.module.scss'

export default function Looking() {
    const [, setTypingStatus] = useState('Initializing');

    return (
        <Section classProp={`${hero.section}`}>
            <Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
                <TypeAnimation
                    className={`${hero.preHeader}`}
                    sequence={[
                        content.intro.startDelay,
                        () => {
                            setTypingStatus('typing');
                        },
                        content.intro.start,
                        () => {
                            setTypingStatus('typed');
                        },
                        content.intro.deleteDelay,
                        () => {
                            setTypingStatus('deleting');
                        },
						content.intro.middle,
                        () => {
                            setTypingStatus('typed');
                        },
                        content.intro.deleteDelay,
                        () => {
                            setTypingStatus('deleting');
                        },
						content.intro.earlyEnd,
                        () => {
                            setTypingStatus('typed');
                        },
                        content.intro.deleteDelay,
                        () => {
                            setTypingStatus('deleting');
                        },
                        content.intro.end,
                        () => {
                            setTypingStatus('deleted');
                        },
                        content.intro.restartDelay,
                    ]}
                    speed={30}
                    deletionSpeed={80}
                    wrapper={"h2"}
                    repeat={Infinity}
                />
            </Container>
        </Section>
    );
}
