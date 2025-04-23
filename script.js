document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  window.location.href = `result.html?q=${encodeURIComponent(query)}`;
});
