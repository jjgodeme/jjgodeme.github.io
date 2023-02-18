<script>
  function updateDate() {
    const currentDate = new Date();
    const dateElement = document.getElementById("date");
    dateElement.innerHTML = currentDate.toDateString();
  }

  updateDate();
</script>
