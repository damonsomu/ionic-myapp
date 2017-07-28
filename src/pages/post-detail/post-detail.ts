import {NavParams} from 'ionic-angular';
import {Component} from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  templateUrl: 'post-detail.html'
})
export class PostDetail {
  selectedItem: any;

  constructor(navParams: NavParams, private socialSharing: SocialSharing) {
    this.selectedItem = navParams.get('item');
	}
	shareSheetShare() {
    this.socialSharing.share(null, null, null, this.selectedItem.link ).then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }
}