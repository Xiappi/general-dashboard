import { Injectable } from '@angular/core';
import {Database} from '../../models/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionsService {

  private header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getDatabaseConnections(): Promise<Database[]>{
    return this.http.get<Database[]>('/api/databases').toPromise();

  }

  public createDatabase(databaseObject: Database): Promise<any> {
    return this.http.post('/api/database_connections/databases',
      {
        headers: this.header,
        body: {
          host_name: databaseObject.host_name,
          port: databaseObject.port,
          username: databaseObject.username,
          password: databaseObject.password,
          schema: databaseObject.schema
        }
      }
    ).toPromise();
  }
}
