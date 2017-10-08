import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {UserService} from "./user.service";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./app.component.css']
})

export class UserDetailComponent implements OnInit{
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ){};

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(params['id']))
      .subscribe(user => this.user = user);
  }

  goBack(): void{
    this.location.back();
  }
}
