
import React, {useState} from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

interface QnAItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

const QnA: React.FC = () => {
    const [qnas, setQnas] = useState<QnAItem[]>(qna);
    const [forceRender, setForceRender] = useState(false);
    const toggleAnswer = (index: number) => {
        setQnas((prevState) => {
            const updatedQnas = prevState.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        isOpen: !item.isOpen // Toggle isOpen
                    };
                }
                return item;
            });
            return updatedQnas;
        });
    };
    
    const renderAnswer = (answer: string) => {
        const lines = answer.split('\n');
        return (
          <ul>
            {lines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        );
      };

    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle title="Q & A" preTitle="" subTitle="Get your Questions answered." />

                <div className={career.area}>
                    {qnas.map((qna, index) => (
                        <div key={index} className={career.company}>
                            <div
                                className={career.companyContent}
                                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                                onClick={() => toggleAnswer(index)}
                            >
                                {qna.question}
                            </div>
                            {qna.isOpen && <div className={career.companyContent}>{renderAnswer(qna.answer)}</div>}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default QnA;
function setForceRender(arg0: (prevState: any) => boolean) {
    throw new Error('Function not implemented.');
}

