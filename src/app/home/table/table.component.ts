import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/modules/user.model';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit{
    users: Object;

    constructor(private http:Http){
    }

    ngOnInit() {
        this.http.get("http://localhost:8000/api/table").subscribe(
            (response) => {
                console.log(response.json());
                this.users = response.json().Repositories;
            },
            (error) => console.log(error)
        );    
      }

}
