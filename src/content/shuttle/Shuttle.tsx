
import { PageHeader, Tag, Button, Typography, Carousel, Image, Space } from 'antd';
import './Shuttle.css';

const { Paragraph, Title } = Typography;

function Shuttle() {
    return (
        <>
            <PageHeader
                title="Shuttle Run Game"
                onBack={() => window.location.href = '/'}
                avatar={{ src: '../images/Icon_Shuttle.png' }}
                tags={
                    <>
                        <Tag color="blue">Gaming</Tag>
                        <Tag color="blue">Unity</Tag>
                        <Tag color="blue">Blender</Tag>
                    </>
                }>
                <Paragraph>
                    Created this project to help me learn 3D modeling and game development.  I made the game content/models using Blender and then used those in developing a game in Unity for mobile and desktop.
                </Paragraph>
                <Title level={5}>Blender Modeling</Title>
                <Paragraph>Using blender I created one of the main assets of the game...the shuttle.  I picked one of the simple shuttles from Star Trek: The Next Generation since I was just learning how to use blender and didn't want to go too crazy.  I did the modeling, texturing, and rigging (animate the doors opening).</Paragraph>
                <Paragraph>
                    <Title level={5}>Building the shuttle in Blender</Title>
                    <Carousel autoplay>
                        <Image src="../images/Shuttle15_Wire.png" />
                        <Image src="../images/Shuttle15.png" />
                        <Image src="../images/Shuttle15_Space.png" />
                        <Image src="../images/Shuttle15_Design1.jpg" />
                        <Image src="../images/Shuttle15_Design2.jpg" />
                    </Carousel>
                </Paragraph>
                <Paragraph>
                    <Title level={5}>Rendered video scene with Blender assets</Title>
                    <video controls width="100%">
                        <source src="https://github.com/asnow003/allensnow-com/blob/gh-pages/media/Shuttle.mp4?raw=true" />
                    </video>
                </Paragraph>
                <Title level={5}>Unity Shuttle Game</Title>
                <Paragraph>Using the shuttle model and a few other small ones I created along with a few free items from the Unity store I was able to create a game using Unity 3D.  Download a demo of the game below.  This is not intended for sale or wide distribution...it was only created as a learning project.  All of the Star Trek names and sounds are copyright of Paramount.</Paragraph>

                <Title level={5}>Download the game demo:</Title>
                <Paragraph>
                    <Space>
                        <Button target="_blank" href="media/ShuttleGame_OSX.zip">Mac OSX</Button>
                        <Button target="_blank" href="media/ShuttleGame_Win10.zip">Windows</Button></Space>
                </Paragraph>

                <Title level={5}>Game Play Instructions</Title>
                <Paragraph>
                    <strong>Use the arrow keys or WASD keys to steer</strong>
                    Once you start the game you will need to click on the thrust to go forward and exist the shuttle bay.  Search the asteroid field for asteroids that contain dilithim....which will look like blue crystals on the rocks.  Once you get close enough the shuttle will automatically mine the crystals for you.  When you have the dilithim bar full at the bottom of the screen you will need to return to the shuttle bay to win!
                </Paragraph>
                <Paragraph>
                    <Image src="../images/Shuttle_Game.png" />
                </Paragraph>
            </PageHeader>
        </>
    )
}

export default Shuttle;