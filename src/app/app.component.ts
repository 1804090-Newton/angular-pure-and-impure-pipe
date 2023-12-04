import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  searchText!:string;
  users=[
    {
       name:'Al jabir'
    },
    {
      name:'hasan'
    },
    {
      name:'suzab'
    }
    ,
    {
     name:'shimul'
    }

    
  ]
  addUser()
    {
      this.users=[...this.users,{name:this.searchText}]// same নামের আরেকটি  array create করলাম 
      //reference change  হওয়ার জন্য ।  users array ta users array er moddhei copy kore rakhlam. fole impure pipe problem ti dhur hoiye gelo

      // this.users.push({
      //   name:this.searchText
      // })
    }



}
