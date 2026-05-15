<script>
function turnOnNightMode(){
  document.body.classList.add("dark-mode");
  document.getElementById("onBtn").style.display = "none";
  document.getElementById("offBtn").style.display = "inline-block";
}
function turnOffNightMode(){
  document.body.classList.remove("dark-mode");
  document.getElementById("onBtn").style.display = "inline-block";
  document.getElementById("offBtn").style.display = "none";
}
    function showMore(){
      let images = document.querySelectorAll(".extra");
      images.forEach(function(img){
        img.classList.remove("hidden");
      });
      document.getElementById("showBtn").style.display="none";
      document.getElementById("lessBtn").style.display="inline-block";
    }
    function showLess(){
      let images = document.querySelectorAll(".extra");
      images.forEach(function(img){
        img.classList.add("hidden");
      });
      document.getElementById("showBtn").style.display="inline-block";
      document.getElementById("lessBtn").style.display="none";
    }

  </script>
