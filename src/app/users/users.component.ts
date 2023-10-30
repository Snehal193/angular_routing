import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  user: {id: string; name:string};
  constructor(private route: ActivatedRoute,  private router: Router ){}
 
  ngOnInit(): void {
this.user= {
  id: this.route.snapshot.params['id'],
  name: this.route.snapshot.params['user']  //whatever the data is in the url will be displayed on the page
}
this.route.params.subscribe((data: Params)=>{
  this.user={
  id: data['id'],
  name: data['name']
}
})
  }

  // onCategoriesClick(){
  //   // this.router.navigateByUrl('/categories');
  //   this.router.navigate(['/categories']);       //used for array of elements
  // }
}
