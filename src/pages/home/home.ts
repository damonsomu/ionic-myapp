import { Component } from '@angular/core';
import {PostDetail} from '../post-detail/post-detail';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
	url: string = 'http://blogzamana.com/wp-json/wp/v2/posts';
	categoryUrl : string = 'http://blogzamana.com/wp-json/wp/v2/categories';
	items: any;
	categories: any;
	
	constructor(public navCtrl: NavController, private http: Http, private nav: NavController ) {	
    this.loadCategories();

	}

	ionViewDidEnter() {

		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      this.items = data;
	    });
	}

	itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}
  

	  loadCategories() {
		this.http.get( this.categoryUrl )
		  .map(res => res.json())
		  .subscribe(data => {
			let categoryArray = {};
	 
			data.forEach(function(item){
			  categoryArray[item.id] = item.name;
			})
	 
			this.categories = categoryArray;
	 
			console.log(categoryArray);
		  });
	  }
	
	  
}