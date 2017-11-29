import React, { Component } from 'react';
import Toolbar from './Toolbar'

class Entry extends Component {

	constructor(props){
		super(props);
	}

	matchYoutube(e) {
		var regyoutube = /(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+$/;
		if(e.key === ' ') {
			var str = e.target.textContent.toString();
			var x = str.search(regyoutube);
			if(x !== -1 ) {
				var y = str.match(regyoutube)[0].toString().replace("watch?v=","embed/");
				e.target.innerHTML = str.substring(0,x) + '<br/>' + '<iframe src="'+ y.toString() +'" width="560"'+ 
				'height="315" frameborder="0" allowfullscreen></iframe>' + '<br/>' +  str.substring(x+y.length+2,str.length);
			}
		}
	}

  render() {
    return (
    	<div>
	      <div className = "diary">
	      	<div className = "entry">
	      		<h2 className = ""><span className = "badg" contentEditable ="true" name = "title"></span></h2>
	      		<div>
	      			<p><span className = "bad" contentEditable ="true" name = "post" onKeyPress = {this.matchYoutube}></span></p>
	      		</div>
	      	</div>
	      	<div>
	      	<Toolbar/>
	      	</div>
	      </div>
	    </div>
    );
  }
}

export default Entry;