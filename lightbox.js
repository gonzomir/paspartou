if( typeof domready != 'function' ){
	window.domready = function(fn){
		document.addEventListener("DOMContentLoaded", fn);
	}
}

domready(function() {
	var images = new Array();
	var current = 0;
	var container = document.getElementById('gallery');
	var $links = container.getElementsByTagName('a');
	var $lb = document.getElementById('lightbox');
	var $im = null;
	var addEventListener = (container.addEventListener)?'addEventListener':'attachEvent';
	var click = (addEventListener == 'addEventListener')?'click':'onclick';
	for(var i = 0, ll = $links.length; i < ll; i++){
		images.push($links[i].href);
		(function(link, index){
			link[addEventListener](click, function(e){
				current = index;
				$lb.getElementsByTagName('div')[0].innerHTML = '<div><img src="'+link.href+'" class="hidden" alt="" ></div>';
				$im = $lb.getElementsByTagName('img')[0];
				$im.onload = function(){
					this.classList.remove('hidden');
				};
				$lb.classList.add('active');
				if (addEventListener == 'addEventListener') {
					e.preventDefault();
				}
				return false;
			}, false);
		})($links[i], i);
	};
	document.getElementById('next')[addEventListener](click, function(e){
		if(current < images.length - 1){
			current++;
			$im.classList.add('hidden');
			$im.src = images[current];
		}
	}, false);
	document.getElementById('prev')[addEventListener](click, function(e){
		if(current > 0){
			current--;
			$im.classList.add('hidden');
			$im.src = images[current];
		}
	}, false);
	document.getElementById('close')[addEventListener](click, function(e){
		$lb.classList.remove('active');
	}, false);
}, false);
