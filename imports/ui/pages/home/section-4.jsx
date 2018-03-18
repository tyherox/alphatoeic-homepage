/**
 * Comparison section!
 *
 * Originally leaned on using semantic-ui for grid stuff... but could probably work without it.
 * Recommend using react-simple-flex-grid!
 */

import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

//Call s3 images
const bannerImage = 'https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/images/comparison.png';

export default class Section extends React.Component {

  render() {

      //Static text asset
      const bannerText = <header>
            <h2>
              책으로 문제 풀고 해설집 보기 번거롭죠?
            </h2>
            <h1>
              <b>터치 몇 번</b>으로
            </h1>
            <h1 style={{ marginTop: '-1rem' }}>
              문제와 해설을 한꺼번에!
            </h1>
            <h2>
              더 이상 힘들게 공부하지 마세요.
            </h2>
      </header>

    return (
        <div className="container-banner container-center-hv responsive-center">
          <Grid className="container-default" stackable verticalAlign="middle">
            <Grid.Row className="container-reverse">
                <Grid.Column width={6} className="elements-reverse">
                    <div id="banner-image-container">
                        <Image src={bannerImage} fluid className="animatedImage" />
                    </div>
                </Grid.Column>
              <Grid.Column width={10} className="elements-reverse responsive-text">
                  {bannerText}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}