import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-knowledge-point4',
  templateUrl: './knowledge-point4.component.html',
  styleUrls: ['./knowledge-point4.component.less'],
})
export class KnowledgePoint4Component implements OnInit {
  info = {
    name: '',
    sex: '男',
    cityList: ['北京', '上海', '曹县', '杭州', '纽约'],
    city: '纽约',
    hobby: [
      { value: 'a', label: '学习', flag: true },
      { value: 'b', label: '跑步', flag: false },
      { value: 'c', label: '游戏', flag: false },
    ],

    mark: '这是条备注',
  };

  // xxxFormControl = new FormControl('初始值',)
  nameFormControl = new FormControl('谭金涛');
  ageFormControl = new FormControl('22');
  emailFormControl = new FormControl('123@qq.com');
  resetForm() {
    this.nameFormControl.setValue('谭金涛');
    this.ageFormControl.reset();
    this.emailFormControl.patchValue('2771289317@qq.com');
  }

  validateForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(23, [Validators.required]),
    email: new FormControl('123@qq.com', [Validators.required]),
  });

  validateNestedForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    address: new FormGroup({
      area: new FormControl('杭州', [Validators.required]),
      street: new FormControl('余杭塘路', [Validators.required]),
    }),
  });
  resetNestedFormGroup() {
    // 重置表单
    this.validateNestedForm.reset();
  }

  resetFormGroup() {
    this.validateForm.reset(); // 重置表单
  }
  submit() {
    console.log('提交表单:', this.validateForm.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
