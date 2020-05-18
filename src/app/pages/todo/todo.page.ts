import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskName: any = '';
  taskList = [];
  constructor(public navCtrl: NavController) { }

  ngOnInit() {

  }
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}
