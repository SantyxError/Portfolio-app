import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos: Array<any> = [];

  ngOnInit(): void {
    this.listdeVideos = [
      {
        title: 'Video 1',
        subtitle: 'Video 1',
        img: 'https://i.ytimg.com/vi/7l16rt1h2tM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACR7UDQPAoK3K1S4dHVeWo12syIw',
      },
      {
        title: 'Video 2',
        subtitle: 'Video 2',
        img: 'https://i.ytimg.com/vi/p3N4ZEAbEho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMc2tgoTSU1Qikncy5-g1iMM44pA',
      },
      {
        title: 'Video 3',
        subtitle: 'Video 3',
        img: 'https://i.ytimg.com/vi/e1Eu3y09zmw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDRLe8SDk4dHpO8WgKrhkaZKofRg',
      },
    ];
    console.log('AppComponent inicializado');
  }
}
