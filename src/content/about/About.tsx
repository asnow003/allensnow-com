import { PageHeader, Typography, Image, Space, Avatar, Card, Divider } from 'antd';
import { LinkedinOutlined, GithubOutlined, TwitterOutlined, PaperClipOutlined } from '@ant-design/icons';
import './About.css';

const { Paragraph, Title, Link } = Typography;
const { Meta } = Card;

function About() {
    return (
        <>
            <PageHeader>

                <Paragraph>
                    <Space>
                        <Image className="profile-image" src="../images/me.jpeg" preview={false} />
                        <Title level={2}>Hello :-)</Title>
                    </Space>
                    <Paragraph>
                        <Paragraph>
                            Hello there and welcome to my home page with informaton on fun projects I have worked on or working on and whatever other info can I can throw in here.
                        </Paragraph>
                        <Paragraph>
                            Please excuse the state of this site because its usually under constant construction as I learn new technologies and so on.
                        </Paragraph>
                    </Paragraph>
                </Paragraph>
                <Divider orientation="left" >Personal Projects</Divider>
                <Space wrap>
                    <Link href="/projects/shuttle">
                        <Card
                            className="project-card"
                            title="Game (Blender/Unity)">
                            <Space direction="vertical" >
                                <Meta
                                    className="project-card-meta"
                                    avatar={
                                        <Avatar src="../images/Icon_Shuttle.png" />
                                    }
                                    title="Shuttle Run Game"
                                    description="Created this project to help me learn 3D modeling and game development"
                                />
                                <Image preview={false} src="../images/Tile_Shuttle.png" />
                            </Space>
                        </Card>
                    </Link>
                    <Link href="/projects/solitaire">
                        <Card className="project-card" title="Game (Web)">
                            <Space direction="vertical" >
                                <Meta
                                    className="project-card-meta"
                                    avatar={
                                        <Avatar src="../images/Icon_Solitaire.png" />
                                    }
                                    title="Solitaire"
                                    description="Experimental project to try and build a game engine using the HTML canvas"
                                />
                                <Image preview={false} src="../images/Tile_Solitaire.png" />
                            </Space>
                        </Card>
                    </Link>
                    <Link href="/projects/klusters">
                        <Card className="project-card" title="Mobile app">
                            <Space direction="vertical" >
                                <Meta
                                    className="project-card-meta"
                                    avatar={
                                        <Avatar src="../images/Icon_Klusters.png" />
                                    }
                                    title="Klusters"
                                    description="Mobile app for used to keep up to date with latest iOS / Swift"
                                />
                                <Image preview={false} src="../images/Tile_Klusters.png" />
                            </Space>
                        </Card>
                    </Link>
                    <Link href="/projects/imgrefiner">
                        <Card className="project-card" title="Open source">
                            <Space direction="vertical" >
                                <Meta
                                    className="project-card-meta"
                                    avatar={
                                        <Avatar src="../images/Icon_Refiner.png" />
                                    }
                                    title="Image refiner component"
                                    description="Open source iOS component for in app image editing"
                                />
                                <Image preview={false} src="../images/Tile_Refiner.png" />
                            </Space>
                        </Card>
                    </Link>
                </Space>
                <Divider orientation="left" >Links</Divider>
                <Space>
                    <Space>
                        <Link href="../media/Resume.pdf" target="_blank">
                            <Card className="link-card">
                                <Avatar className="link-card-avatar" size="large" icon={<PaperClipOutlined />} />
                                Resume
                            </Card>
                        </Link>
                    </Space>
                    <Space>
                        <Link href="https://github.com/asnow003" target="_blank">
                            <Card className="link-card">
                                <Avatar className="link-card-avatar" size="large" icon={<GithubOutlined />} />
                                GitHub
                            </Card>
                        </Link>
                    </Space>
                    <Space>
                        <Link href="https://www.linkedin.com/in/allensnow/" target="_blank">
                            <Card className="link-card">
                                <Avatar className="link-card-avatar" size="large" icon={<LinkedinOutlined />} />
                                LinkedIn
                            </Card>
                        </Link>
                    </Space>
                    <Space>
                        <Link href="https://twitter.com/asnow003" target="_blank">
                            <Card className="link-card">
                                <Avatar className="link-card-avatar" size="large" icon={<TwitterOutlined />} />
                                Twitter
                            </Card>
                        </Link>
                    </Space>
                </Space>
            </PageHeader>
        </>
    )
}

export default About;