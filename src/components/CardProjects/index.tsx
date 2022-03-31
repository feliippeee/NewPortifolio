import Link from 'next/link';
import Image from 'next/image';
import { Container, Projects, Title, SubTitle, ImageProject, DescriptionProject, LinkGit } from './styles';
interface ProjectsProps {
    image: string;
    width?: string;
    height?: string;
    textSubtitle?: string;
    title: string;
    subTitle: string;
    link: string;

}

export default function CardProjects({image, textSubtitle, title, subTitle, link}: ProjectsProps) {
    return (
        <Container>
            <Projects>
                <ImageProject
                        src={image} 
                        alt={textSubtitle} 
                        
                        />
               
                <DescriptionProject>

                <Title>{title}</Title>
                <SubTitle>
                    {subTitle}
                </SubTitle>
                    <LinkGit>
                    <Link href={link}>
                        <a target="_blank" rel="noopener noreferrer">Link do GitHub</a>
                    </Link>
                    </LinkGit>
                    
                </DescriptionProject>
            </Projects>
        </Container>
    )
}