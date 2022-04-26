import Link from 'next/link';
import { Container, Projects, Title, SubTitle, CardImageProject, ImageProject, DescriptionProject,Links, LinkGit, LinkPage } from './styles';
import { SiGithub } from 'react-icons/si';
import { useEffect } from 'react';
import { AnimatePresence, usePresence } from 'framer-motion';
interface ProjectsProps {
    image: string;
    width?: string;
    height?: string;
    textSubtitle?: string;
    title: string;
    subTitle: string;
    link: string;
    linkProject: string;

}

export default function CardProjects({image, textSubtitle, title, subTitle, link, linkProject}: ProjectsProps) {
    
    return (
        <AnimatePresence exitBeforeEnter>

        <Container>
            <Projects>
                <CardImageProject>

                <ImageProject
                    src={image} 
                    alt={textSubtitle}                     
                />
                </CardImageProject>
                <DescriptionProject>

                <Title>{title}</Title>
                <SubTitle>
                    {subTitle}
                </SubTitle>
                    
                </DescriptionProject>
                <Links>
                    <LinkGit>
                    <Link href={link}>
                        <a target="_blank" rel="noopener noreferrer"><SiGithub /> Link do GitHub</a>
                    </Link>
                    </LinkGit>
                    <LinkPage>
                        <Link href={linkProject}>
                            <a target="_blank" rel="noopener noreferrer">Link Project</a>
                        </Link>
                    </LinkPage>
                </Links>
            </Projects>
        </Container>
        </AnimatePresence>
    )
}