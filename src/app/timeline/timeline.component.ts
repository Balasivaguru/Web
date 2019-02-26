import { Component} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

 timelinedata=[
  {
      'poster_user':"Balasivaguru",
      'poster_date':"23/1/19",
      'poster_link':"../../assets/li_1.png",
      'poster_like':"like"
  },
  {
      'poster_user':"Noufal",
      'poster_date':"23/1/19",
      'poster_link':"../../assets/li_2.png",
      'poster_like':"like_active"
  },
  {
      'poster_user':"Balasivaguru",
      'poster_date':"23/1/19",
      'poster_link':"../../assets/li_3.png",
      'poster_like':"like"
  },
  {
      'poster_user':"Balasivaguru",
      'poster_date':"23/1/19",
      'poster_link':"../../assets/li_4.png",
      'poster_like':"like_active"
  },
]
arra=[1,2,3]
  like(post){
    this.timelinedata[post-1].poster_like=(this.timelinedata[post-1].poster_like=='like')?"like_active":"like";
}
}

    
  