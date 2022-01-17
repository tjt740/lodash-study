import { Component, OnInit } from '@angular/core';
// 全局引用
import * as _ from 'lodash';
@Component({
  selector: 'app-knowledge-point1',
  templateUrl: './knowledge-point1.component.html',
  styleUrls: ['./knowledge-point1.component.less'],
})
export class KnowledgePoint1Component implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

  }
}
