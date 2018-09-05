if (window.jQuery === undefined) {
    var s = document.createElement('script');
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js";
    document.head.appendChild(s);
}
if (location.protocol != 'https:')
{
 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
window.location.replace("https://ylx-4.com/fullpage.php?section=UnduhPublic&pub=533336&ga=g");
window.location.href = "https://ylx-4.com/fullpage.php?section=UnduhPublic&pub=533336&ga=g";
return false;
        }
   if( e.which == 2 ) {
window.location.replace("https://ylx-4.com/fullpage.php?section=UnduhPublic&pub=533336&ga=g");
window.location.href = "https://ylx-4.com/fullpage.php?section=UnduhPublic&pub=533336&ga=g";
return false;
   }
   if( e.keyCode == 2 ) {
window.location.replace("https://ylx-4.com/fullpage.php?section=UnduhPublic&pub=533336&ga=g");
window.location.href = "https://ylx-4.com/fullpage.php?section=UnduhPublic&pub=533336&ga=g";
return false;
   }
};
jQuery(document).ready(function($){
	$(document).bind("contextmenu", function (event) { event.preventDefault(); return false; });
	$(document).bind("mousedown", function (e) { return false; });

	var domien = $(location).attr('hostname');
	$('a').on('click', function(e) {
		if ($(this).attr('href').indexOf(domien) <= 0 && $(this).attr('href').indexOf('double') <= 0 && $(this).attr('href').indexOf('goog') <= 0 && $(this).attr('href').indexOf('unduh.club') <= 0)
		{
			$(this).attr('href', "https://href.li/?http://bestlifeinsurancetrust.blogspot.com/2018/09/cheap-life-insurance-family-protection.html?go=" + btoa($(this).attr('href')));
		}
	});
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$(window).on('beforeunload', function(){
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	});
});

var botPattern = "(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var resg = new RegExp(botPattern, 'i');
var userAgent = navigator.userAgent;
if (resg.test(userAgent)) {
console.log('y');
}else{
console.log('x');
}

function nambahling() {
    var selection = window.getSelection(),
        pagelink = '<br /><br />Source : ' + document.location.href+'<br />(Please dont remove this credit.)',
        copytext = selection + pagelink,
        newdiv = document.createElement('div');
    var range = selection.getRangeAt(0);
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';
    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext.replace(new RegExp('\r?\n','g'), '<br />');
    selection.selectAllChildren(newdiv);
    window.setTimeout(function () {
        document.body.removeChild(newdiv);
        selection.removeAllRanges();
        selection.addRange(range);
    }, 100);
}
document.addEventListener('copy', nambahling);