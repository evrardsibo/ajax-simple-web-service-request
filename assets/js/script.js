let xhr = new XMLHttpRequest;
   
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    
    xhr.onload = function() 
        {
            
            if (this.status === 200) 
                {
                
                    let reponse = (JSON.parse(this.responseText));
                    let citation = reponse.quote;
                    let par = reponse.author;
                    let pic = reponse.photo;

                    document.getElementById('picture').src = pic;
                    document.getElementById('quote').innerHTML = citation;
                    document.getElementById('author').innerHTML = par;
        }else{

            alert("Sorry for the inconvenience")
        }
                }
    xhr.send();
  

    