import { PageHeader, Tag, Button, Typography, Image, Space } from 'antd';
import './ImgRefiner.css';
const { Paragraph } = Typography;

function ImgRefiner() {
    return (
        <>
            <PageHeader
                title="Image Refiner"
                onBack={() => window.location.href = '/'}
                avatar={{ src: '../images/Icon_Refiner.png' }}
                tags={
                    <>
                        <Tag color="blue">iOS</Tag>
                        <Tag color="blue">Swift</Tag>
                        <Tag color="blue">Open Source</Tag>
                    </>
                }>
                <Paragraph>
                    Use this utility in your applications so your users can crop a given images or use it so that you can control the size and quality of images that are selected in your application.
                </Paragraph>
                <Paragraph>
                    <Space>
                        <Button target="_blank" href="https://github.com/asnow003/iOSImageRefiner">Github</Button>
                        <Button target="_blank" href="https://cocoapods.org/pods/iOSImageRefiner">Cocoapods</Button>
                    </Space></Paragraph>
                <Paragraph>
                    <Space>
                        <Image src="https://raw.githubusercontent.com/asnow003/iOSImageRefiner/master/docs/ImageEdit1.png" />
                        <Image src="https://raw.githubusercontent.com/asnow003/iOSImageRefiner/master/docs/ImageEdit2.png" />
                        <Image src="https://raw.githubusercontent.com/asnow003/iOSImageRefiner/master/docs/ImageEdit3.png" />
                        <Image src="https://raw.githubusercontent.com/asnow003/iOSImageRefiner/master/docs/ImageEdit4.png" />
                    </Space>
                </Paragraph>
            </PageHeader>
        </>
    )
}

export default ImgRefiner;