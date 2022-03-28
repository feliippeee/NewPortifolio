import Link from 'next/link';
import { Container, Projects, Title, SubTitle, ImageProject, DescriptionProject, LinkGit } from './styles';
interface ProjectsProps {
    image: string;
    textSubtitle?: string;
    title: string;
    subTitle: string;
    link: string;

}

export default function CardProjects({image, textSubtitle, title, subTitle, link}: ProjectsProps) {
    return (
        <Container>
            <Projects>
                <ImageProject>
                    <img 
                        src={image} 
                        alt={textSubtitle} 
                        />
                </ImageProject>
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