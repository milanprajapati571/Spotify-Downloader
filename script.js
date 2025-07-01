document.getElementById("downloadBtn").addEventListener("click", async function () {
  const url = document.getElementById("spotifyUrl").value.trim();
  const resultDiv = document.getElementById("result");

  if (!url.includes("spotify.com/track")) {
    alert("Please enter a valid Spotify track URL.");
    return;
  }

  const encodedUrl = encodeURIComponent(url);
  const apiUrl = `https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${encodedUrl}`;

  resultDiv.innerHTML = "Fetching download link...";

  const options = {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "YOUR_API_KEY",
      "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(apiUrl, options);
    const json = await response.json();

    console.log("API Response:", json);

    if (json.success && json.data && json.data.downloadLink) {
      const song = json.data;

      resultDiv.innerHTML = `
        <p><strong>Title:</strong> ${song.title}</p>
        <p><strong>Artist:</strong> ${song.artist}</p>
        <img src="${song.cover}" alt="Cover" width="150" style="margin:10px 0"/><br>
        <audio controls src="${song.downloadLink}"></audio><br><br>
        <a href="${song.downloadLink}" target="_blank" download="${song.title}.mp3">Click here to Download</a>
      `;
    } else {
      resultDiv.innerHTML = `
        ❌ No valid download link found.<br><br>
        <pre>${JSON.stringify(json, null, 2)}</pre>
      `;
    }

  } catch (error) {
    console.error("Fetch error:", error);
    resultDiv.innerHTML = "❌ An error occurred while fetching the download link.";
  }
});
