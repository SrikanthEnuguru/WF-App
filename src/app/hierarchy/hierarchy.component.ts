import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  countries= [{
    id: 'AL',
    name: 'Algeria'
}, {
  id: 'KN',
  name: 'Kenya'
}, {
  id: 'MO',
  name: 'Morocco'
}, {
  id: 'ZA',
  name: 'Zambia'
}, {
  id: 'RW',
  name: 'Rwanda'
}, {
  id: 'EG',
  name: 'Eygypt'
}, {
  id: 'LI',
  name: 'Libya'
}, {
  id: 'DE',
  name: 'Denmark'
}]; 

  constructor() { }

  ngOnInit() {
  }

}
