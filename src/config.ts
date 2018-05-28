import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyAst1mP-xy-F02lR4SVifP7mSn-39YtDco",
		authDomain: "mobile-cinemas.firebaseapp.com",
		databaseURL: "https://mobile-cinemas.firebaseio.com",
		projectId: "mobile-cinemas",
		storageBucket: "mobile-cinemas.appspot.com",
		messagingSenderId: "970385262663"
	}
};
