import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-restaurant',
  templateUrl:'./add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean = false;
  AddRestaurant= new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  craeteResto(){
    // console.log(this.addRestaurent.value);
    this.resto.addResto(this.AddRestaurant.value).subscribe((result)=>{
      this.alert = true;
      this.AddRestaurant.reset({});
      console.log("Get Data From Service", result)
    })
  }
  closeAlert(){
    this.alert = false;
  }

  showConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit the form?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your submit logic here
        this.craeteResto();
      }
    });
  

}
}

