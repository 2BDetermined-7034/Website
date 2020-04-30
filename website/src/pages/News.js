import React, { Component, Fragment } from 'react';

const news = [
    {
        title: "Corvallis Scrimmage",
        date: "February 19th, 2020",
        body: "Our team went to Corvallis to compete in a pre-season scrimmage. We competed with other teams in order to learn more about our robots strengths and weaknesses. We used what we learned from the scrimmage to modify our robot so it would perform better in the tournament.",
        mediaType: "image",
        media: "corvallis2020.jpg"
    },
    {
        title: "Chairman's Video",
        date: "February 6th, 2020",
        body: "The Chairman's Award is the award given to the team that is both exemplary and best embodies the purpose of FIRST. This is 2B Determined's 2020 submission for the Chairman's Award.",
        mediaType: "video",
        media: "https://www.youtube.com/embed/1Lc2DZarRU0"
    },
    {
        // TODO FIX URLS
        title: "2020 FRC Kickoff",
        date: "January 3rd, 2020",
        body: 'Our team went to Wilsonville with two other local teams to watch the live game reveal video and learn about this season\'s theme - Infinite Recharge. Click <a href="https://www.firstinspires.org/robotics/frc/game-and-season">here</a> or visit the <a href="http://wlhsfrc.com/"> Game & Season</a> page to learn more.',
        mediaType: "image",
        media: "infiniterecharge.png"
    },
    {
        title: "Bunny Bots 2019",
        date: "December 21st, 2019",
        body: "Our team built two robots to compete in the off-season competition <i>Bunny Bots</i>, hosted by the Catlin Gable School. Both performed quite well, getting our alliance to second place in the final round. We all enjoyed the event and learned lots to prepare us for the main competition",
        mediaType: "image",
        media: "bunnybots2019.jpg"
    },
    {
        title: "Tacoma Regional Event",
        date: "April 11th, 2019",
        body: "Our team competed at the PNW regional in Tacoma, WA. We placed 48 out of 56 and unfortunately will not be competing at Worlds in Houston. Our team fought hard in the competition, and we'll give it our all next year!",
        mediaType: "image",
        media: "tacoma2019.jpg"
    },
    {
        title: "Clackamas Academy Districts",
        date: "March 30th, 2019",
        body: "Our team competed in the second of our two districts events. This event took place at Clackamas Academy in Oregon City, OR. After the qualification matches, our record was 8-3-1, and we were in 9th place. We were selected by team 3024 'My Favorite Team' from Ashland to join the 5th alliance, and the alliance leaders decided to pick team 6465 'Mystic Biscuit' from Bend. We won our first playoff match, but unfortunately lost our next two, preventing us from advancing. The competition left us in a favorable spot to advance to the district event in Tacoma.",
        mediaType: "video",
        media: "https://www.youtube.com/embed/f6y8UkqAa4E"
    },
    {
        title: "Wilsonville Districts",
        date: "March 12th, 2019",
        body: "We competed in the PNW District Wilsonville event, our first competition this season, for three days. We were ranked 9th overall at the end of the qualification matches, with a record of 7-5-1. We moved up to to be the captains of the 7th alliance after the first alliance picked 957 'SWARM Robotics' and 6343 'Steel Ridge Robotics' for the palyoff matches. Unfortunately, we lost to the 2nd alliance, which went on to win the playoffs. We recieved two judged awards: the Safety Award, awarded to teams that use innovative methods to protect against hazards, and the prestigious Judges' Award, awarded to the team that the judges believe deserve recognition for their efforts.",
        mediaType: "image",
        media: "wilsonville2019.jpg"
    },
    {
        title: "Chairman's Video",
        date: "February 7th, 2019",
        body: "The Chairman's Award is the award given to the team that is both exemplary and best embodies the spirit of FIRST. This is 2B Determined's 2019 submission for the chairman's award.",
        mediaType: "video",
        media: "https://www.youtube.com/embed/lclV6gW8qfk"
    },
    {
        title: "2018 Season Recap",
        date: "May 17th, 2018",
        body: "Our 2018 season recap video is now out! Watch it here:",
        mediaType: "video",
        media: "https://www.youtube.com/embed/joB7utGgOeg"
    },
    {
        title: "Houston Championship",
        date: "April 26th, 2018",
        body: "We competed with 67 other teams in the Hopper division of the FRC World Championship in Houston, TX. We ended the qualification matches ranked 38th, and unfortunately we weren't picked to compete in the elimination stages. Due to our performance as a first year team, we won the Rookie Inspiration Award.",
        mediaType: "image",
        media: "houston2018.jpg"
    },
    {
        title: "Heading to Worlds!",
        date: "April 12th, 2018",
        body: 'Our team will be heading to Houston, TX on April 18th for the FRC World Championship! Traveling to the tournament costs a lot of money, and any support would be greatly appriciated. If you\'re willing to pitch in and help pay for our plane tickets, hotel rooms, and food, please visit our Support Us page. If you want to watch us compete, our matches will be broadcasted live on <a href="https://www.twitch.tv/firstinspires_hopper">Twitch</a>.',
        mediaType: "image",
        media: "headingtoworlds2018.jpg"
    },
    {
        title: "Pacific Northwest District Championship",
        date: "April 9th, 2018",
        body: "We were selected to attend the Pacific Northwest District Championships due to our performance at the regional events. We were ranked 26th out of 64 at the end of the qualification matches, but unfortunately we were not selected to compete on one of the elimination round alliances. Due to our outstanding performance as a first year team, we were awarded the Rookie All Star award, which guarenteed us a spot at the international tournament in Houston, TX.",
        mediaType: "image",
        media: "pnw2018.jpg"
    },
    {
        title: "Lake Oswego District Event",
        date: "April 2nd, 2018",
        body: "We finished the qualifying tournament ranked 19th at our second tournament in Lake Oswego, OR. We were selected to compete in the elimination rounds, however we lost in the quarter finals. We took home trophies for the Highest Seeded Rookie and Rookie All Star awards. Our robot also had the second highest climb score of the event, climbing in 10 out of our 12 games!",
        mediaType: "combo",
        media: {
            image: "lo2018.jpg",
            video: "https://www.youtube.com/embed/gndkJ-1gkvM"
        }
    },
    {
        title: "Wilsonville District Event",
        date: "March 12th, 2018",
        body: "We achieved rank 7th after the first qualifying matches at our first tournament in Wilsonville, OR. We ended up as the 4th seed captain in the elimination rounds, losing in the quarter finals. Due to our high rank, we took home the Highest Rookie Seed award!",
        mediaType: "image",
        media: "wilsonville2018.jpg"
    },
    {
        title: "Corvallis Scrimmage",
        date: "February 19th, 2018",
        body: "Our team went to Corvallis to compete in a pre-season scrimmage. We competed with other teams in order to learn more about our robot's strengths and weaknesses. We used what we learned from the scrimmage to modify our robot, helping ot perform better in the real tournaments.",
        mediaType: "image",
        media: "corvallis2018.jpg"
    }
];

class News extends Component {
    render() {
        return (
            <div className="container">
                {
                    news.map(post =>
                    <Post key={`${post.title}-${post.date}`} title={post.title} date={post.date} body={post.body} mediaType={post.mediaType} media={post.media} />)
                }
            </div>
        );
    }
}

class Post extends Component {
    render() {
        return(
            <Fragment>
                <div className="text-center mt-3 w-100">
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <h5 className="card-subtitle mb-1 font-italic">{this.props.date}</h5>
                            <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.body}} />
                        </div>
                        {this.props.mediaType === "image" &&
                            <img className="card-img-bottom w-100 px-3 pb-3" src={require(`../artifacts/images/news/${this.props.media}`)} alt={`${this.props.title}`} />
                        }
                        {this.props.mediaType === "video" &&
                            <div className="card-img-bottom px-3 pb-3 w-100">
                                <div className="embed embed-responsive embed-responsive-16by9">
                                    <iframe className="w-100" title={this.props.title} src={this.props.media} frameBorder="0" allowFullScreen />
                                </div>
                            </div>
                        }
                        {
                            this.props.mediaType === "combo" &&
                            <div className="card-img-bottom px-3 pb-3 w-100">
                                <img className="card-img-bottom w-100 px-3 pb-3" src={require(`../artifacts/images/news/${this.props.media.image}`)} alt={`${this.props.title}`} />
                                <div className="embed embed-responsive embed-responsive-16by9">
                                    <iframe className="w-100" title={this.props.title} src={this.props.media.video} frameBorder="0" allowFullScreen />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <hr />
            </Fragment>
        );
    }
}

export default News;
