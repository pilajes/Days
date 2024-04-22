
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUsers, faLightbulb, faVideo, faComments } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';



export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="How does Days work?"
					preTitle=""
					subTitle="Here at Day's we help you collaborate with the best creators in the world to create high quality content"
				/>
				<section className={about.content}>
					<div className={about.image}>
					<div className={about.copy}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<h3>1. Choose from our selection of templates</h3>
							<div className={`${about.icon2} flex-center`}>
								<FontAwesomeIcon icon={['fas','file-alt']} className="fa-4x"/>                                
							</div>
							<div style={{ fontSize: '2rem' }}>↓</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<h3>2. Assemble your Team of experts</h3>
							<div className={about.icon2}>
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<FontAwesomeIcon icon={faUsers} className="fa-4x" />
								</div>
							</div>
							<div style={{ fontSize: '2rem' }}>↓</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<h3>3. Cultivate a unified vision with the Team</h3>
							<div className={about.icon2}>
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<FontAwesomeIcon icon={['fas', 'lightbulb']} className="fa-4x" />
								</div>
							</div>
							<div style={{ fontSize: '2rem' }}>↓</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<h3>4. The Team Records & Edits Content</h3>
							<div className={about.icon2}>

								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<FontAwesomeIcon icon={['fas', 'video']} className="fa-4x" />
								</div>
							</div>
							<div style={{ fontSize: '2rem' }}>↓</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<h3>5. Content Delivered to you</h3>
							<div className={about.icon2}>
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<FontAwesomeIcon icon={['fas', 'envelope']} className="fa-4x" />
								</div>
							</div>
						</div>
					</div>

					</div>
					<div className={about.copy}>
						<CopyBlock
							title="Choose a Template"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'file-alt' ]}
							copy="Choose from a diverse range of project templates, Cinematography/Video Editing (for Reels, TikToks, YouTube), Song production, Podcast creation, Photography, Animation, and Comics. Whether you're planning a special occasion like a wedding or baby shower, we also offer templates tailored to those unique events!"
						/>
						<CopyBlock
							title="Assemble a Team"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'users']}
							copy="Explore our vibrant community of skilled cinematographers, editors, animators, and other creative professionals, and handpick the perfect team to bring your vision to life."
						/>
												<CopyBlock
							title="Cultivate a unified Vision"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'lightbulb']}
							copy="Once your team is in place, they'll reach out to you directly to start the conversation. This initial contact is crucial for understanding your vision and requirements. Through these discussions, they'll ensure they're aligned with your goals and have a clear understanding of what needs to be done to bring your vision to life. This personalized approach sets the stage for a collaborative and efficient process, where every detail is carefully considered to meet your needs and exceed your expectations."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>

						<CopyBlock
							title="Sit back while the Team works"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'video']}
							copy="Sit back, relax, and entrust your project to our capable team. Whether it's immortalizing the magic of your wedding day in a cinematic masterpiece or crafting a captivating advertisement to elevate your small business, Days is your one-stop destination for all your creative needs. With our experienced professionals at the helm, you can rest assured that every aspect of your project will be handled with meticulous care and attention to detail. From concept creation to final delivery, we're here to exceed your expectations and bring your vision to life in the most extraordinary way possible."
						/>



						<BadgesBlock
							title="Receive & Distrubute Content"
							containerClass={about.container}
							list={socialMediaIcons}
							fullContainer="fullContainer"
							block="methods"
							icon="envelope"
							copy="
							Once the creative journey reaches its culmination, our dedicated team will seamlessly deliver the final content to your doorstep. Whether you're eagerly awaiting to share it with the world or simply savoring the moment to enjoy it yourself, our mission is to ensure that the delivery process is smooth and hassle-free. With meticulous attention to detail and a commitment to excellence, we take pride in presenting you with content that not only meets but exceeds your expectations. So, whether you're preparing to distribute it across various platforms or relish it in the comfort of your own space, you can trust us to handle every step of the process with utmost care and professionalism."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined}						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
    { key: 'facebook', name: 'Facebook', icon: faFacebook },
    { key: 'twitter', name: 'Twitter', type: 'fab', icon: 'twitter' },
    { key: 'linkedin', name: 'LinkedIn', type: 'fab', icon: 'linkedin' },
    { key: 'instagram', name: 'Instagram', type: 'fab', icon: 'instagram' },
];
const socialMediaIcons = [
    { key: 'facebook', name: 'Facebook', type: 'fab', icon: faFacebook },
    { key: 'twitter', name: 'Twitter', type: 'fab', icon: faTwitter },
    { key: 'tiktok', name: 'Tiktok', type: 'fab', icon: faTiktok },
    { key: 'instagram', name: 'Instagram', type: 'fab', icon: faInstagram },
];



