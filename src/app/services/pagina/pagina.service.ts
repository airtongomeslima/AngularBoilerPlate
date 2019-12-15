import { Injectable, Query } from '@angular/core';
import { BaseService } from '../base.service';
import { Post } from '../../models/Post';
import { QueryOptions } from 'src/app/helpers/general';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  public posts: BehaviorSubject<Array<Post>> = new BehaviorSubject<Array<Post>>(new Array<Post>());

  constructor(private baseService: BaseService<Post>) { }

  public GetPosts(): void {
    this.baseService.list(null, '').pipe(take(1)).subscribe(response => {
      this.posts.next(response);
    });
  }
}

