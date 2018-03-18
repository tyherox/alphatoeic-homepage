/**
 * First banner section!
 *
 * Originally leaned on using semantic-ui for grid stuff... but could probably work without it.
 * Recommend using react-simple-flex-grid!
 */

import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

//Call s3 images
const bannerImage = 'https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/images/main.png';
const apple = 'https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/images/apple.png';
const google = 'https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/images/google.png';

export default class Section extends React.Component {

    render() {

        // Static Text Assets
        const bannerText = <header>
          <h1>
            학원, 인강, 교재 없이도
          </h1>
          <h1 style={{ marginTop: '-1rem' }}>
            <b>토익점수</b>를 올릴 수 있습니다
          </h1>
          <h3>
            내 손안에 토익학원 <b>알파토익</b>
          </h3>
        </header>;

        const Wrapper = () => (
            <div>
                <Grid id="banner" className="container-default" stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {bannerText}
                            <Grid verticalAlign="middle" style={{ paddingTop: '15px' }} id="banner-cta">
                                <Grid.Column mobile={16} tablet={8} computer={5}>
                                    <a href={"https://play.google.com/store/apps/details?id=com.test.alphatoeic.alphatoeic"} target={"_blank"}>
                                        <Image src={google} fluid style={{maxWidth: '25rem', margin: 'auto'}}/>
                                    </a>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={8} computer={5}>
                                    <a href={"https://itunes.apple.com/kr/app/%EC%95%8C%ED%8C%8C%ED%86%A0%EC%9D%B5/id1330114954?mt=8"} target={"_blank"}>
                                        <Image src={apple} fluid style={{maxWidth: '25rem', margin: 'auto'}}/>
                                    </a>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div id="banner-image-container">
                                <Image src={bannerImage} fluid className="animatedImage"  id="banner-image" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )


        return (
            <div className="container-banner container-center-hv responsive-center">
                <Wrapper />
            </div>
        );
    }
}