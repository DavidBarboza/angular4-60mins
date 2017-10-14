import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any; //this can be any type of value, string, number, boolean etc...
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran...');
  } 

  ngOnInit() {
    console.log('ngOnInit ran...');
    
    this.name = 'David Barboza';
    this.age = 29;
    this.email = 'benjigoenitz@gmail.com';
    this.address = {
      street:'calle 5',
      city:'Zapopan',
      state: 'Jalisco'
    }
    this.hobbies = ['Play KOF', 'Learn programing','Play the bass'];

    this.dataService.getPosts().subscribe((posts) =>{
      //console.log(posts);
      this.posts = posts;
    });
  }
    onClick(){
      this.name = 'Benji Goenitz';
      this.hobbies.push('New Hobbie');
      //console.log('hola');
    }

    addHobby(hobby){
      console.log(hobby);
      this.hobbies.unshift(hobby);
      return false;
    }

    deleteHobby(hobby){
      for (let i = 0; i < this.hobbies.length; i++){
        if (this.hobbies[i] == hobby){
          this.hobbies.splice(i, 1);  
        }
      }
      //console.log(hobby);
    }

    toggleEdit(){
      this.isEdit = !this.isEdit;
    }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
