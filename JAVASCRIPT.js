<script>
function btnClick(btn) {
    btn.innerHTML = "Clicked!";
    btn.style.background = "green";
}
document.getElementById("year").textContent = new Date().getFullYear();
</script>