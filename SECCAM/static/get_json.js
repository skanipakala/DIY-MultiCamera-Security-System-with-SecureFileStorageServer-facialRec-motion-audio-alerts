var count =0;
var table = document.createElement('table');
table.setAttribute('class', 'GeneratedTable')
var headerROW = document.createElement('tr');
var cell_1 = document.createElement('td');
var cell_2 = document.createElement('td');
var cell_3 = document.createElement('td');

// SET THIS PROPERTY BEFORE STARTING FLASK SERVER
var your_IP = '192.168.1.5'
var your_PORT = '5000'

cell_1.appendChild(document.createTextNode("File Name"));
cell_2.appendChild(document.createTextNode("Date Created"));
cell_3.appendChild(document.createTextNode("Download Link"));
headerROW.appendChild(cell_1)
headerROW.appendChild(cell_2)
headerROW.appendChild(cell_3)
table.appendChild(headerROW);

$(table).attr('border', '2');
$(table).attr('align', 'center');
console.log('before ajax')

$.ajax({
  url: "/repl",
  success: function(data){

	
	console.log("got data from repl..." + data);
	var all_files = data['files']
	// Put array of images into JSON file to return it
     $(all_files).each(function(){
		console.log('start of for loop:' + all_files[count]['filename']);
        // will loop through 
		
		var fname= all_files[count]['filename'];
		var date = all_files[count]['datecreated'];
       // var images = $(this).attr("href");
		
        console.log("current file" + fname);
        // EACH TIME IMAGE COMES
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
		var td3 = document.createElement('td');
        var td2 = document.createElement('td');
        var link = document.createElement('a');
                
        var text1 = document.createTextNode(fname);
		var date_text = document.createTextNode(date)		
        link.download = fname.replace(".mp4", "") + "_" + date.replace(":", "_") + ".mp4";
		
        var icon = document.createElement('img');
        icon.src = 'http://'+ your_IP + ':' + your_PORT + '/static/icon.png';        
        link.appendChild(icon);        
        $(icon).attr('width', '50');
        $(icon).attr('height', '50');
		
        link.href='http://' + your_IP + ':' + your_PORT +'/static/' + fname      
        
        td1.appendChild(text1);
		td3.appendChild(date_text);
        td2.appendChild(link);
        tr.appendChild(td1);
		tr.appendChild(td3);
		$(td2).attr('align', 'center');
        tr.appendChild(td2);
        table.appendChild(tr);       
        count++;
        
     });
     console.log(count);

	document.body.appendChild(table);


  }
});