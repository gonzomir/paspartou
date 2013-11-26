window.addEventListener('DOMContentLoaded', function() {
	var images = new Array();
	var current = 0;
	var $links = document.querySelectorAll('#gallery a');
	var $lb = document.getElementById('lightbox');
	var $im = null;
	for(var i = 0, ll = $links.length; i < ll; i++){
		images.push($links[i].href);
		(function(link, index){
			link.addEventListener('click', function(e){
				current = index;
				$lb.querySelector('div > div').innerHTML = '<img src="'+this.href+'" class="hidden" alt="" />';
				$im = $lb.querySelector('img');
				$im.onload = function(){
					this.classList.remove('hidden');
				};
				$lb.classList.add('active');
				e.preventDefault();
				return false;
			}, false);
		})($links[i], i);
	};
	document.getElementById('next').addEventListener('click', function(e){
		if(current < images.length - 1){
			current++;
			$im.classList.add('hidden');
			$im.src = images[current];
		}
		e.stopPropagation();
	}, false);
	document.getElementById('prev').addEventListener('click', function(e){
		if(current > 0){
			current--;
			$im.classList.add('hidden');
			$im.src = images[current];
		}
		e.stopPropagation();
	}, false);
	document.getElementById('close').addEventListener('click', function(e){
		$lb.classList.remove('active');
	}, false);
}, false);
