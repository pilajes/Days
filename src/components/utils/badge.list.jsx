// Import necessary components and styles
import { m } from 'framer-motion';
import badgesStyles from '../../styles/scss/blocks/badges.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Badges({ list, block, fullContainer }) {
    return (
        <m.ul
            className={`${badgesStyles.list} ${badgesStyles[block]} ${badgesStyles[fullContainer]}`}
            // Add animations and other props if necessary
        >
            {list.map(({ key, name, type }) => (
                <m.li key={key} className={`${badgesStyles.item} ${key}`}>
                    {/* Render the icon */}
                    <FontAwesomeIcon icon={['fab', key]} />
                    <span className={badgesStyles.title}>{name}</span>
                </m.li>
            ))}
        </m.ul>
    );
}
