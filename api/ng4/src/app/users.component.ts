import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class UsersComponent implements OnInit {
  users: User[];

  constructor(private router: Router,
              private userService: UserService) {
  }

  /**
   * Gets the existing users
   */
  getUsers(): void {
    this.userService.getUsers()
      .then(users => {
        this.users = users;
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  update(id: string): void {
    this.router.navigate(['/update', id]);
  }

  remove(id: string): void {
    this.userService.remove(id)
      .then(() => {
        this.getUsers();
      });
  }

  viewDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
