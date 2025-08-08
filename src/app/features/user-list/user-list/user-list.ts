import {Component, OnInit} from '@angular/core';
import {NgClass, NgFor} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {Card} from 'primeng/card';

interface User {
  id: number;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  lastMessage: string;
  lastMessageTime: Date;
}


@Component({
  selector: 'app-user-list',
  imports: [
    NgClass, NgFor, TranslatePipe, Card
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
  users: User[] = [];


  ngOnInit() {
    // Mock data - replace with API call
    this.users = [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
        status: 'online',
        lastMessage: 'Hey, how are you?',
        lastMessageTime: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=2',
        status: 'offline',
        lastMessage: 'Let’s meet tomorrow!',
        lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
      },
      {
        id: 3,
        name: 'David Lee',
        avatar: 'https://i.pravatar.cc/150?img=3',
        status: 'online',
        lastMessage: 'See you soon 👍',
        lastMessageTime: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
      }
    ];
  }

  getRelativeTime(date: Date): string {
    const diff = (Date.now() - date.getTime()) / 1000;
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  openChat(user: User) {
    console.log(user);
  }
}
