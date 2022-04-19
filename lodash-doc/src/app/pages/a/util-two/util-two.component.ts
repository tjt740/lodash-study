import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-two',
  templateUrl: './util-two.component.html',
  styleUrls: ['./util-two.component.less']
})
export class UtilTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    let newArr1 = _.compact([0, 1, false, 2, '', 3]);
    // → [1,2,3];
    console.log(newArr1);


    let newArr2 = _.compact([[NaN, 0, false], '0', 740]);
    // → [[NaN, 0, false],'0', 740];
    console.log(newArr2);

    // Step2 初始化
    this.initCode = this.toolsDoc.compactArray();
  }

}
