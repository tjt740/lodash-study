import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-three',
  templateUrl: './util-three.component.html',
  styleUrls: ['./util-three.component.less'],
})
export class UtilThreeComponent implements OnInit {
  initCode: string = '';
  constructor(public toolsDoc: ToolsDocService) {}

  ngOnInit(): void {
    let arr = [1, 2, 3, 4];
    let newArr1 = _.concat(arr, 5, 6, [7]);
    // → [1, 2, 3, 4, 5, 6, 7];
    console.log('newArr1:', newArr1);

    // @ts-ignore
    var newArr2 = _.concat(arr, 5, [6], [[7]]);
    // → [1, 2, 3, 4, 5, 6, [7]];
    console.log('newArr2:',newArr2);

    // Step2 初始化
    this.initCode = this.toolsDoc.concatArray();
  }
}
