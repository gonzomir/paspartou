if( typeof domready != 'function' ){
	window.domready = function(fn){
		if(document.addEventListener){
			document.addEventListener('DOMContentLoaded', fn, false);
		}
		else {
			window.onload = fn;
		}
	}
}

domready(function() {
	var images = new Array();
	var current = 0;
	var container = document.getElementById('gallery');
	var $links = container.getElementsByTagName('a');
	var $lb = document.getElementById('paspartou');
	var $im = null;
	var $p = null;
	var $next = document.getElementById('next');
	var $prev = document.getElementById('prev');
	var addEventListener = (container.addEventListener)?'addEventListener':'attachEvent';
	var click = (addEventListener == 'addEventListener')?'click':'onclick';

	function setButtons(current){
		if(current == images.length - 1){
			$next.className = 'hidden';
		}
		else{
			$next.className = '';
		}
		if(current == 0){
			$prev.className = 'hidden';
		}
		else{
			$prev.className = '';
		}
	}

	for(var i = 0, ll = $links.length; i < ll; i++){
		images.push( {
			url: $links[i].href,
			title: ($links[i].getAttribute('data-title') != null)?$links[i].getAttribute('data-title'):''
		} );
		(function(link, index){
			link[addEventListener](click, function(e){
				current = index;
				var title = (link.getAttribute('data-title') != null)?link.getAttribute('data-title'):'';
				$lb.getElementsByTagName('div')[0].innerHTML = '<div><img src="'+link.href+'" class="hidden" alt="' + title + '" ><p>' + title + '</p></div>';
				$im = $lb.getElementsByTagName('img')[0];
				$p = $lb.getElementsByTagName('p')[0];
				$im.onload = function(){
					this.className = '';
					$p.innerHTML = this.getAttribute('alt');
				};
				$lb.className = 'active';
				setButtons(index);
				if (addEventListener == 'addEventListener') {
					e.preventDefault();
				}
				return false;
			}, false);
		})($links[i], i);
	};
	$next[addEventListener](click, function(e){
		if(current < images.length - 1){
			current++;
			$im.className = 'hidden';
			$im.src = images[current].url;
			$im.setAttribute('alt', images[current].title);
			setButtons(current);
		}
	}, false);
	$prev[addEventListener](click, function(e){
		if(current > 0){
			current--;
			$im.className = 'hidden';
			$im.src = images[current].url;
			$im.setAttribute('alt', images[current].title);
			setButtons(current);
		}
	}, false);
	document.getElementById('close')[addEventListener](click, function(e){
		$lb.className = '';
	}, false);
});
