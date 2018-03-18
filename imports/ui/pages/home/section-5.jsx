/**
 * Who is alphatoeic section!
 *
 * Originally leaned on using semantic-ui for grid stuff... but could probably work without it.
 * Recommend using react-simple-flex-grid!
 */

import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class Section extends React.Component {

  render() {

    return (
        <div className="container-fullWidth">
          <div className="container-default" style={{ paddingTop: '75px' }}>
            <h1 style={{ textAlign: 'center'}}>
              <b>Dr. 알파</b>는 누구인가요?
            </h1>
            <Grid style={{ paddingTop: '25px', paddingBottom: '75px' }} stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <div className="container-responsive">
                    <h2 style={{ marginBottom: '25px' }}>
                      ∙ 학력 및 저서
                    </h2>
                    <h3>
                      컬럼비아 대학교 영문학 학사
                    </h3>
                    <h3>
                      하버드 교육대학원 석사
                    </h3>
                    <h3>
                      한국외대 통번역대학원 박사
                    </h3>
                    <h3>
                      {'<뉴욕을 알면 영어가 보인다>'}
                    </h3>
                    <h3>
                      {'월간 교재 <EBS Easy Writing>'}
                    </h3>
                  </div>
                </Grid.Column>
                <Grid.Column width={8}>
                  <div className="container-responsive">
                    <h2 style={{ marginBottom: '25px' }}>
                      ∙ 경력
                    </h2>
                    <h3>
                      한국외대 영어대 원어민 교수
                    </h3>
                    <h3>
                      EBS 라디오 진행자
                    </h3>
                    <h3>
                      EBS eTV 강사
                    </h3>
                    <h3>
                      EBS 랑 강사
                    </h3>
                    <h3>
                      메가스터디 MBest 강사
                    </h3>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}