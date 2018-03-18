/**
 * Orange Showcase section!
 *
 * Originally leaned on using semantic-ui for grid stuff... but could probably work without it.
 * Recommend using react-simple-flex-grid!
 */

import React from 'react';
import { Grid, Image} from 'semantic-ui-react';

//Call s3 images
const bannerImage = 'https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/images/banner.png';

export default class Section extends React.Component {

  render() {

    return (
        <div className="container-banner container-center-hv responsive-center" style={{ background: '#e58a30', color: 'white' }}>
          <Grid className="container-default" stackable verticalAlign="middle"  style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <Grid.Row>
              <Grid.Column width={10}>
                <h2>
                  아직도 토익을 수능처럼 공부하나요?
                </h2>
                <h1 style={{ color: 'black'}}>
                  언제 어디서나
                </h1>
                <h1 style={{ marginTop: '-1rem', color: 'black'}}>
                  3분만 집중하세요.
                </h1>
                <h2>
                  매회 토익을 보고
                </h2>
                <h2>
                  시험 분석과 맞춤형 솔루션을 제공합니다.
                </h2>
              </Grid.Column>
              <Grid.Column width={6}>
                  <div id="banner-image-container">
                      <Image src={bannerImage} fluid className="animatedImage"  id="banner-image" />
                  </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}