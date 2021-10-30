
import { PageHeader, Tag, Button, Typography, Image, Space } from 'antd';
import './Island.css';

const { Paragraph } = Typography;

function Island() {
    return (
        <>
            <PageHeader
                title="Teams Island"
                onBack={() => window.location.href = '/'}
                avatar={{ src: '../images/Placehold.png' }}
                tags={
                    <>
                        <Tag color="blue">Gaming</Tag>
                        <Tag color="blue">Microsoft Teams</Tag>
                    </>
                }>
                <Paragraph>
                    Hackathon work project where I led a team to build a multiplayer game in Teams that allows each member of a team to join a virtual island and build a community.
                </Paragraph>
            </PageHeader>
        </>
    )
}

export default Island;