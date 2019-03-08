import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular project';

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(2015,1,17)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2016,3,23)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2017,5,12)
    },
    {
      instanceType: 'medium',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2018,3,15)
    }
  ];

  filteredStatus = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}){
      return{
        'list-group-item-success': server.status === 'stable',
        'list-group-item-warning': server.status === 'offline',
        'list-group-item-danger': server.status === 'critical'
      };
  }
  constructor() {}

  ngOnInit() {
  }
}

