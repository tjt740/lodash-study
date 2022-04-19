import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-four',
  templateUrl: './util-four.component.html',
  styleUrls: ['./util-four.component.less']
})
export class UtilFourComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {

    let arr = [1, 2, 3];
    let newArr1 = _.difference(arr, [2, 3]);

    console.log('newArr1:', newArr1);



    // this.initCode = this.toolsDoc.randomArray();
  }

}
