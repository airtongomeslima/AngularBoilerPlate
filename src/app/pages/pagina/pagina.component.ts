import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina/pagina.service';
import { Post } from 'src/app/models/Post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit, OnDestroy {

  posts: Array<Post> = new Array<Post>();
  subscriptions: Subscription = new Subscription();

  constructor(private paginaService: PaginaService) { }

  ngOnInit() {
    this.paginaService.GetPosts();
    this.subscriptions.add(this.paginaService.posts.subscribe(response => {
      this.posts = response;
    }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
