import { PageHeader, Tag, Button, Typography, Carousel, Image } from 'antd';
import './Klusters.css';
const { Paragraph } = Typography;


function Klusters() {
    return (
        <>
            <PageHeader
                title="Klusters"
                onBack={() => window.location.href = '/'}
                avatar={{ src: '../images/Icon_Klusters.png' }}
                tags={
                    <>
                        <Tag color="blue">iOS</Tag>
                        <Tag color="blue">Swift</Tag>
                    </>
                }>
                <Paragraph>
                    This is a free iOS application for both iPhone and iPad that I use as a learning tool to keep me up to date with developing Apple apps.
                </Paragraph>
                <Paragraph>
                    <Button target="_blank" href="https://itunes.apple.com/us/app/klusters/id1244555430?mt=8">iOS App Store</Button></Paragraph>
                <Paragraph>
                    <Carousel autoplay>
                        <Image preview={false} src="../images/Klusters.png" />
                        <Image preview={false} src="../images/Klusters1.png" />
                        <Image preview={false} src="../images/Klusters2.png" />
                    </Carousel>
                </Paragraph>
                <Paragraph>
                    Create lists of items, tasks, collections, or whatever you can think of to help organize the world around you. Use the kluSters application to build a customized list of items with whatever data values you would like for each item by using the form-like builder. Include values like text, numbers, tags, images, colors, multiple selection, barcodes, and more. Its very dynamic giving you the ability to create a list of items with all the right information you would like to use to describe each item the way you want.
                </Paragraph>
                <Paragraph>
                    Lists can be searched, grouped, filtered, synced, and exported. Search, sort, and filter within each of your custom collections to find and organize items the way you would like to see them. Using your Dropbox account, you can synchronize your data between devices. Export your items and images to Dropbox or iTunes in CSV format to be used in your favorite spreadsheet application or whatever you may choose.
                </Paragraph>
                <Paragraph>
                    This has been a pet project of mine for a few years which started as an app I wanted to catalog some collectables of mine but couldn't find something that was customizable enough. Finally, getting it out there and hope you like it. Please feel free to go to the support site and use the discussion board listed or email me with issues you are seeing, features you would like, or issues/bugs.
                </Paragraph>
            </PageHeader>
        </>
    )
}

export default Klusters;