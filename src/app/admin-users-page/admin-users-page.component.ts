import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {DatabaseConnectionsService} from '../services/database-connections.service';
import {User} from '../../models/users';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent implements OnInit {

  Users: User[];

  constructor(private authService: AuthService,
               private router: Router,
               private dbService: DatabaseConnectionsService,
               private usersService: UsersService) {
    if (authService.isAdmin() === false){
      this.router.navigate(['/home']);
    }
  }

  async ngOnInit(): Promise<void> {
    this.Users = await this.usersService.getUsers();
  }

  async deleteUser(user: string): Promise<void> {
    await this.usersService.deleteUser(user);
  }
}
