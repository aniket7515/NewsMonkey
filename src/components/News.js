import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class News extends Component {
    articles = [
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Al Jazeera",
          "title": "Cricket: How Namibia sealed one of T20 World Cup’s biggest shocks",
          "description": "Namibia, ranked a lowly 19, reached the Super 12 round of the T20 World Cup second after shocking Ireland.",
          "url": "http://www.aljazeera.com/sports/2021/10/23/namibia-cricket-t20-world-cup",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/10/000_9Q86RX.jpg?resize=1200%2C630",
          "publishedAt": "2021-10-23T07:11:27Z",
          "content": "Namibias cricket team, ranked a lowly 19, reached the T20 World Cup second round for the first time with a stunning eight-wicket win over Ireland.\r\nThey now go into the Super 12 stage where they face… [+2507 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Bilal Kuchay",
          "title": "How Umran Malik became an icon for young Kashmiri cricketers",
          "description": "Dedication and luck drafted the 21-year-old into India’s T20 World Cup squad, much to the delight of those back home.",
          "url": "http://www.aljazeera.com/sports/2021/10/23/how-umran-malik-became-an-icon-for-young-kashmiri-cricketers",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/10/Abdul-Rashid-Malik-at-his-home-in-Jammu.jpg?resize=1200%2C630",
          "publishedAt": "2021-10-23T06:08:12Z",
          "content": "Jammu, Indian-administered Kashmir A group of youngsters are playing cricket on a small ground along the Tawi River in Gujar Nagar locality of Jammu city early in the morning.\r\nA 12-year-old boy runs… [+6276 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hello I am Constructor from a news component");
        this.state = {
            articles: this.articles,
            loading: false
            
        }
       
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>News Monkey - Top Headlines</h2>
               
                <div className="row">
                {this.state.articles.map((element)=>{
                  return <div className="col-md-3" key={element.url}>
                    <NewsItems  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage}   newsUrl={element.url}/>
                    </div>

                })}
                    
                    
                </div>
                
                

            
            </div>
        )
    }
}

export default News
