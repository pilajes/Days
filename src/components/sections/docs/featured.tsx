
import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title'

import Icon from '../../utils/icon'

import css from '../../../styles/scss/sections/articles/recent.module.scss'
import docs from '../../../content/docs/featured.json'
import React from "react";
import dynamic from 'next/dynamic';

export default function Recent({ }) {

    const QnA = dynamic(() => import('../index/qna'));
    return(
        <div>
            <QnA />
        </div>
    )

}