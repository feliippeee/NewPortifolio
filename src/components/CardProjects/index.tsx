import Link from 'next/link';
import Image from 'next/image';
import { Container, Projects, Title, SubTitle, CardImageProject, ImageProject, DescriptionProject, LinkGit } from './styles';
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
                    <LinkGit>
                    <Link href={link}>
                        <a target="_blank" rel="noopener noreferrer">Link do GitHub</a>
                    </Link>
                    </LinkGit>
            </Projects>
        </Container>
    )
}