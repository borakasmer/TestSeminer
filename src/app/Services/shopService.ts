import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const url = 'http://webapiblog.azurewebsites.net/api/products';
@Injectable()
export class ShopService {
    constructor(private http: Http) { }
    public GetList() {
        return this.http.get(url).
            map(result => result.json());
    }
}