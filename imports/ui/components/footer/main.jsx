/**
 * footer component
 */

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


export default class Footer extends Component {
  render() {
    return (
      <div>
        <div id="footer" style={{ color: 'white' }}>
          <Grid style={{ padding: '15px' }}>
            <Grid.Row>
              <Grid.Column width={8}>
                <h4 style={{ display: 'inline', fontWeight: '700', color: 'gray' }}>
                  대표이사 이유진 ㅣ 사업자 등록번호 385-88-00665
                </h4>
                <h4 style={{ marginTop: '0px', color: 'gray' }}>
                  서울시 성동구 상원10길 25 2층
                </h4>
              </Grid.Column>
              <Grid.Column width={8} textAlign="right">
                <h4 style={{ display: 'inline', fontWeight: '700', color: 'gray' }}>
                  전화 : 02-466-7836
                </h4>
                <h4 style={{ marginTop: '0px', color: 'gray' }}>
                  이메일 : support@alphatoeic.com
                </h4>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <h4 style={{ display: 'inline', fontWeight: '700', color: 'gray' }}>
                  © 2017 ㈜알파토익. All RIGHTS RESERVED.
                </h4>
              </Grid.Column>
              <Grid.Column width={8} textAlign="right">
                <h4 style={{ display: 'inline', fontWeight: '700', color: 'gray' }}>
                  Alphatoeic
                </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
