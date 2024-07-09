import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myname: any = null;
  isShowNameBtn = true;

  peoples: any = [
    {
      name: 'Rohim'
    },
    {
      name: 'Korim'
    },
    {
      name: 'Rohim 1'
    },
    {
      name: 'Korim 1'
    }
  ]

  price = 100;
  today = new Date();

  constructor(
    private commonServiceService: CommonServiceService,
    private formBuilder: FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
    id: [],
    password: []
  })

  signupForm= this.formBuilder.group({
    name: [],
    email: [],
    password: []


  })


  ngOnInit(): void {




  }

  showMyName() {
    this.myname = this.commonServiceService.myNmae();

  }
  hideMyName() {
    this.myname = null;
  }

  showHide() {
    if (this.isShowNameBtn) {
      this.showMyName()
    } else {
      this.hideMyName()
    }
  }

  login(){
    let loginInfo: any= this.loginForm.value
    console.log(loginInfo)
    console.log("The id is "+loginInfo.id)
    console.log("The password is "+loginInfo.password)
  }

  signup(){
    let signupInfo: any= this.signupForm.value
    console.log(signupInfo)

  }
}
