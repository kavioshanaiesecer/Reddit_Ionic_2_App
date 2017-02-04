import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditsSevice{
    http:any;
    baseUrl : string;

constructor(http:Http){
    this.http=http;
    this.baseUrl='https://www.reddit.com/r';
}

    getPosts(catergory, limit){
        return this.http.get(this.baseUrl+'/'+catergory+'/top.json?limit='+limit).map(res=>res.json());
    }

}

