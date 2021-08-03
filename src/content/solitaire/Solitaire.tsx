
import { PageHeader, Tag, Button, Typography, Image, Space } from 'antd';
import './Solitaire.css';

const { Paragraph } = Typography;

function Solitaire() {
    return (
        <>
            <PageHeader
                title="Solitaire"
                onBack={() => window.location.href = '/'}
                avatar={{ src: '../images/Icon_Solitaire.png' }}
                tags={
                    <>
                        <Tag color="blue">Gaming</Tag>
                        <Tag color="blue">Web</Tag>
                    </>
                }>
                <Paragraph>
                    Experimental project to try and build a game engine using the HTML canvas.  Built the basics for the game engine and this sample game to test all the areas like the gaming loop, collisions, and other game events.
                </Paragraph>
                <Paragraph>
                    <Space>
                        <Button target="_blank" href="https://asnow003.github.io/teams-solitaire/">Demo</Button>
                        <Button target="_blank" href="https://github.com/asnow003/teams-solitaire">GitHub</Button>
                    </Space></Paragraph>
                <Paragraph>
                    One of the main goals was to try and create a light weight game engine that could easily be used to create basic 2D games that would work in Microsoft Teams.
                </Paragraph>
                <Paragraph>
                    <Image preview={false} src="../images/Solitaire.png" />
                </Paragraph>
            </PageHeader>
        </>
    )
}

export default Solitaire;