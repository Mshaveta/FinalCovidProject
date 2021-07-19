import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/admin/services/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dateToday: number = Date.now();
  
  router: any;
   
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  message='';
  doInquiry(inqFrmData: NgForm) {
    console.log(inqFrmData.value);
    this.authService.addInquiry(inqFrmData.value).subscribe((data: any) => {
      this.message='Inquiry has been add successfully';

       
    });
  }
}
