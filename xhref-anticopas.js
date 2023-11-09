<!-- xhref script anti Copy,Paste,Save,Inspect and View Page Source <-->
   <script> 
      document.addEventListener('contextmenu', event=> event.preventDefault()); 
      document.onkeydown = function(e) { 
      if(event.keyCode == 123) { 
      return false; 
      } 
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
      return false; 
      } 
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
      return false; 
      } 
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
      return false; 
      } 
      if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){ 
      return false; 
      }
      if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){ 
      return false; 
      } 
      if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){ 
      return false; 
      }  
      } 
      </script> 