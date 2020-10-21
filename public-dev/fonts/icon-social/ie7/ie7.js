/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon-social\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-social-basket-board': '&#xe901;',
		'icon-social-basket-board2': '&#xe902;',
		'icon-social-basket-icon': '&#xe900;',
		'icon-social-share2': '&#xea82;',
		'icon-social-mail': '&#xea83;',
		'icon-social-mail2': '&#xea84;',
		'icon-social-mail3': '&#xea85;',
		'icon-social-mail4': '&#xea86;',
		'icon-social-amazon': '&#xea87;',
		'icon-social-google': '&#xea88;',
		'icon-social-google2': '&#xea89;',
		'icon-social-google3': '&#xea8a;',
		'icon-social-google-plus': '&#xea8b;',
		'icon-social-google-plus2': '&#xea8c;',
		'icon-social-google-plus3': '&#xea8d;',
		'icon-social-hangouts': '&#xea8e;',
		'icon-social-google-drive': '&#xea8f;',
		'icon-social-facebook': '&#xea90;',
		'icon-social-facebook2': '&#xea91;',
		'icon-social-instagram': '&#xea92;',
		'icon-social-whatsapp': '&#xea93;',
		'icon-social-spotify': '&#xea94;',
		'icon-social-telegram': '&#xea95;',
		'icon-social-twitter': '&#xea96;',
		'icon-social-vine': '&#xea97;',
		'icon-social-vk': '&#xea98;',
		'icon-social-renren': '&#xea99;',
		'icon-social-sina-weibo': '&#xea9a;',
		'icon-social-rss': '&#xea9b;',
		'icon-social-rss2': '&#xea9c;',
		'icon-social-youtube': '&#xea9d;',
		'icon-social-youtube2': '&#xea9e;',
		'icon-social-twitch': '&#xea9f;',
		'icon-social-vimeo': '&#xeaa0;',
		'icon-social-vimeo2': '&#xeaa1;',
		'icon-social-lanyrd': '&#xeaa2;',
		'icon-social-flickr': '&#xeaa3;',
		'icon-social-flickr2': '&#xeaa4;',
		'icon-social-flickr3': '&#xeaa5;',
		'icon-social-flickr4': '&#xeaa6;',
		'icon-social-dribbble': '&#xeaa7;',
		'icon-social-behance': '&#xeaa8;',
		'icon-social-behance2': '&#xeaa9;',
		'icon-social-deviantart': '&#xeaaa;',
		'icon-social-500px': '&#xeaab;',
		'icon-social-steam': '&#xeaac;',
		'icon-social-steam2': '&#xeaad;',
		'icon-social-dropbox': '&#xeaae;',
		'icon-social-onedrive': '&#xeaaf;',
		'icon-social-github': '&#xeab0;',
		'icon-social-npm': '&#xeab1;',
		'icon-social-basecamp': '&#xeab2;',
		'icon-social-trello': '&#xeab3;',
		'icon-social-wordpress': '&#xeab4;',
		'icon-social-joomla': '&#xeab5;',
		'icon-social-ello': '&#xeab6;',
		'icon-social-blogger': '&#xeab7;',
		'icon-social-blogger2': '&#xeab8;',
		'icon-social-tumblr': '&#xeab9;',
		'icon-social-tumblr2': '&#xeaba;',
		'icon-social-yahoo': '&#xeabb;',
		'icon-social-yahoo2': '&#xeabc;',
		'icon-social-tux': '&#xeabd;',
		'icon-social-appleinc': '&#xeabe;',
		'icon-social-finder': '&#xeabf;',
		'icon-social-android': '&#xeac0;',
		'icon-social-windows': '&#xeac1;',
		'icon-social-windows8': '&#xeac2;',
		'icon-social-soundcloud': '&#xeac3;',
		'icon-social-soundcloud2': '&#xeac4;',
		'icon-social-skype': '&#xeac5;',
		'icon-social-reddit': '&#xeac6;',
		'icon-social-hackernews': '&#xeac7;',
		'icon-social-wikipedia': '&#xeac8;',
		'icon-social-linkedin': '&#xeac9;',
		'icon-social-linkedin2': '&#xeaca;',
		'icon-social-lastfm': '&#xeacb;',
		'icon-social-lastfm2': '&#xeacc;',
		'icon-social-delicious': '&#xeacd;',
		'icon-social-stumbleupon': '&#xeace;',
		'icon-social-stumbleupon2': '&#xeacf;',
		'icon-social-stackoverflow': '&#xead0;',
		'icon-social-pinterest': '&#xead1;',
		'icon-social-pinterest2': '&#xead2;',
		'icon-social-xing': '&#xead3;',
		'icon-social-xing2': '&#xead4;',
		'icon-social-flattr': '&#xead5;',
		'icon-social-foursquare': '&#xead6;',
		'icon-social-yelp': '&#xead7;',
		'icon-social-paypal': '&#xead8;',
		'icon-social-chrome': '&#xead9;',
		'icon-social-firefox': '&#xeada;',
		'icon-social-IE': '&#xeadb;',
		'icon-social-edge': '&#xeadc;',
		'icon-social-safari': '&#xeadd;',
		'icon-social-opera': '&#xeade;',
		'icon-social-file-pdf': '&#xeadf;',
		'icon-social-file-openoffice': '&#xeae0;',
		'icon-social-file-word': '&#xeae1;',
		'icon-social-file-excel': '&#xeae2;',
		'icon-social-libreoffice': '&#xeae3;',
		'icon-social-html-five': '&#xeae4;',
		'icon-social-html-five2': '&#xeae5;',
		'icon-social-css3': '&#xeae6;',
		'icon-social-git': '&#xeae7;',
		'icon-social-codepen': '&#xeae8;',
		'icon-social-svg': '&#xeae9;',
		'icon-social-IcoMoon': '&#xeaea;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-social-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
