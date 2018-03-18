/**
 * Carousel section with scores
 *
 * Originally leaned on using semantic-ui for grid stuff... but could probably work without it.
 * Recommend using react-simple-flex-grid!
 *
 * Look into changing out react-slick into a more react friendly solution.
 * There are some quirks such as lazyloading errors!
 */

import React from 'react';
import Slider from 'react-slick';
import { Grid, Icon, Button } from 'semantic-ui-react';

//Screen sizes for responsive design
const mobileSize = 600,
    tabletSize = 900,
    computerSize = 1200;

export default class Section extends React.Component {

    render() {

        // Static Text Assets
        const bannerText = <div>
            <h1>
                신토익 1회부터 매회 응시
            </h1>
            <h1>
                최다 연속 <b>만점 1위</b>!
            </h1>
            <h1>
                토익은 쉬워요. 알파토익과 함께라면.
            </h1>
            <h3>
                만점자들의 풀이비법 <b>알파토익</b>
            </h3>
        </div>;

        return (

            <div className="container-banner container-center-hv responsive-center" style={{ padding: '30px 0px'}}>
                <div className="container-default">

                    <div className="responsive-text">
                        {bannerText}
                    </div>

                    <SimpleSlider />
                </div>
            </div>
        );
    }
}

//Score Carousel Element!
class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scores: [], called: false};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    //Hook for next slides
    next() {
        this.slider.slickNext();
    }

    //Hook for previous slides
    previous() {
        this.slider.slickPrev();
    }

    render() {

        //React-slick settings
        const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                responsive: [
                    { breakpoint: mobileSize - 1, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
                    { breakpoint: tabletSize - 1, settings: { slidesToShow: 2, slidesToScroll: 2, dots: false } },
                ],
            },
            self = this,
            scores = this.state.scores;

        //Call score if there are no scores found in state!
        if(scores.length === 0 ){
            Meteor.call('getScores', function(err, result){
                if(!err) {
                    //If no error, set scores to state
                    self.setState({scores: result});
                }
                else console.log(err);
            });
        }

        /**
         *  The scores components in the carousel. Call from most recent (hence the reverse function)
         *
         *  Probably could be cleaned up if semantic-ui isn't used!
         */
        const ScoresComponent = scores ?scores.reverse().map(function(elem){
            return <div key={elem.url}>
                <div className="image-slides">
                    <Grid style={{ width: '100%', height: '100%', margin: '0'}} verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column>
                                <figure>
                                    <img src={elem.url}  style={{width: '100%'}}/>
                                    <figcaption style={{textAlign: 'center', paddingTop: '15px'}}>{elem.date}</figcaption>
                                </figure>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        }) : <div>No Scores</div>;

        return (
            <div style={{ marginTop: '25px', marginBottom: '25px', position: 'relative' }}>
                <div style={{ paddingLeft: '70px', paddingRight: '70px'}}>
                    <Slider {...settings} ref={(c) => { this.slider = c; }} style={{position: 'relative'}}>
                        {ScoresComponent}
                    </Slider>
                    <h3 style={{textAlign: 'center', paddingTop: '15px'}}>알파토익 연구진이 실제 토익을 보고 받은 성적표입니다.</h3>
                </div>
                {/*Custom Carousel Buttons*/}
                <Button
                    icon
                    circular
                    onClick={this.previous}
                    size="huge"
                    style={{ left: '0', marginRight: '5px' }}
                    className="image-buttons"
                >
                    <Icon name="left chevron" />
                </Button>
                <Button
                    icon
                    circular
                    onClick={this.next}
                    size="huge"
                    style={{ right: '0', marginLeft: '5px', marginRight: '0' }}
                    className="image-buttons"
                >
                    <Icon name="right chevron" />
                </Button>
            </div>
        );
    }
}