import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Item } from './item';

@Injectable()
export class ItemsService {
    private itemsUrl = 'app/items'; // Url to Web API
    private options: RequestOptions;

    constructor(private http: Http) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        this.options = new RequestOptions({ headers: headers });
    }

    getItems(): Observable<Item[]> {
        return this.http.get(this.itemsUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addItem(name: string): Observable<Item> {
        let body = JSON.stringify({ name });

        return this.http.post(this.itemsUrl, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteItem(id: number) {
        let url = this.itemsUrl + '/' + id;

        return this.http.delete(url, this.options)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: any) {
        return Observable.throw(error.json().error || 'Server Error');
    }

}
