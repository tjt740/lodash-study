import { Component, OnInit } from '@angular/core';
// lodash
import * as _ from 'lodash';

// Step1 函数文档
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-one',
  templateUrl: './util-one.component.html',
  styleUrls: ['./util-one.component.less'],
})
export class UtilOneComponent implements OnInit {
  initCode: string = '';

  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {

    let arr1 = ['a1', 'b2', 'c3', 'd4', 'e5']
    let arr2 = [['a', 'b'], 'c', 'd','e']

    let newArr1 = _.chunk(arr1, 2);
    // → [['a1', 'b2'], ['c3', 'd4'], ['e5']];
    console.log('newArr1:', newArr1)

    let newArr2 = _.chunk(arr2, 2);
    // → [[["a","b"],"c"], ["d","e"]]；
    console.log('newArr2:',newArr2)

    this.initCode = this.toolsDoc.chunkArray()
  }
}
