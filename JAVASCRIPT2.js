<script>
<button id="onBtn" onclick="turnOnNightMode()">
  <i class="fa-solid fa-moon"></i>
</button>

<button id="offBtn"
onclick="turnOffNightMode()"
style="display:none;">
  <i class="fa-solid fa-sun"></i>
</button>
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
  </script>