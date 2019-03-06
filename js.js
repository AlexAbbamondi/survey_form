////load checkbox empty
		function optIn(){
			document.myForm.yearsPlayed.checked=false;
		}
		window.onload=optIn;
		
		
////output text and numbers		
      function outputForm() {
        var len = document.forms[0].length;
        var output = '';
        for (var i=0;i<len;i++) {
          output += document.forms[0].elements[i].name + ' = ' +
            document.forms[0].elements[i].value + '\n';
        };
        alert(output);
      }
		
////ask the number of years played if box is checked		
	function askYears(){
		//alert(document.myForm.yearsPlayed.checked);
		if(document.myForm.yearsPlayed.checked){
			document.getElementById("optionalYears").innerHTML=
				'<label>How many years?</label> <input type=\"number\" name=\"years\" min=\"0\" max=\"75\" required ><br>';
		}
		else{
			document.getElementById("optionalYears").innerHTML=""	
		}	
		}
		
		
////message appears and disappears from text area when clicked		
		function myMessage(){
			document.getElementById("showMessage").innerHTML="Please do not write anything offensive.";		
		}
		function hideMessage(){
			document.getElementById("showMessage").innerHTML="";			
		}
		


////ask for instrument is choice other
		function askInstrument(){
			document.getElementById("specifyInstrument").innerHTML=
				'<label> Please specify: </label> <input type=\"text\" name=\"otherInstrument\" required ><br>';
		}
		

///used for the given instrument radio buttons
		function givenInstruments(){
			document.getElementById("specifyInstrument").innerHTML=' ';
		}	
		

///compose output form
		function compose(){
			var band= document.myForm.band.value;

			var song= document.myForm.song.value;

			var yearsPlayed= document.myForm.yearsPlayed.checked;
			if(yearsPlayed==true){
			var years= document.myForm.years.value;
			}
		
			var instruments= document.myForm.instruments.value;
			switch(instruments){
				case "other"	:
					var otherInstrument= document.myForm.otherInstrument.value;
					break;
			}
			
			var first_song_album= document.myForm.first_song_album.value;
			
///what is writen for the output
			var theCompose="<h2>Here is what you told us:</h2>";
			theCompose+="Your favorite band is: "+band+"<br>";
			theCompose+="Your favorite song is: "+song+"<br>";
			
			if(yearsPlayed==true){	
				theCompose+="You do play a musical instrument<br>"
				theCompose+="You have played for "+years+"<br>";
			}else{
				theCompose+="You do not play a muscial instrument<br>";
			}
			
			
			if(instruments=="piano"){	
				theCompose+="Your favorite musical instrument is the piano<br>";
			}else if(instruments=="guitar"){
				theCompose+="Your favorite musical instrument is the guitar<br>";
			}else if(instruments=="drums"){
				theCompose+="Your favorite musical instrument is the drums<br>";
			}else if(instruments=="other"){
				theCompose+="Your favorite musical instrument is "+otherInstrument+"<br>";
			}
			
			theCompose+="The first song or album you ever purchased was: <pre>"+first_song_album+"</pre><br>";
			//alert(theCompose);
			document.getElementById("showCompose").innerHTML=theCompose;
			document.getElementById("myForm").style.display="none";
			}