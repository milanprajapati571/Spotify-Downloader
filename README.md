
# 🎧 Spotify-Downloader

A web application that lets you download any Spotify track by just pasting its URL.  
It uses [RapidAPI's Spotify Downloader API](https://rapidapi.com/) to fetch and stream the song.

---

## 🌐 Live Demo

> 💡 Coming Soon — You can deploy this using GitHub Pages or Vercel!

---

## 🖥️ Features

- Paste any Spotify track URL
- Fetches song info: title, artist, cover image
- Stream the audio
- One-click download with custom filename

---

## 📁 Project Structure

```
spotify-song-downloader/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles
├── script.js         # JavaScript logic (calls RapidAPI)
└── README.md         # You're reading it!
```

---

## 🚀 Getting Started

### 1. 🔌 Clone the repository

```bash
git clone https://github.com/your-username/spotify-song-downloader.git
cd spotify-song-downloader
```

### 2. 🧠 Open the project

Use any text editor like VS Code to edit the files.

---

## 🔑 Setting up RapidAPI Access

### Step-by-step to get your API Key and Endpoint

1. Go to [RapidAPI Spotify Downloader 9](https://rapidapi.com/)
2. Log in or create a free account
3. Search for: `spotify-downloader9`
4. Subscribe to the API (Free Tier works fine)
5. Go to the **Endpoints** section
6. Copy the required API snippet and locate your API key:
   - Example endpoint:  
     ```
     https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=...
     ```
   - Headers:
     ```json
     {
       "x-rapidapi-key": "YOUR_API_KEY",
       "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com"
     }
     ```

---

## 🧩 Update `script.js`

In `script.js`, find this section:
```js
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'YOUR_API_KEY_HERE',
    'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
  }
};
```

🔁 Replace `YOUR_API_KEY_HERE` with your actual key from RapidAPI.

---

## ▶️ How to Use

1. Open `index.html` in your browser.
2. Paste any Spotify track URL like:  
   `https://open.spotify.com/track/2Kw97Ze8yhh5WDlRkEURKh`
3. Click **Download**
4. The song will:
   - Appear with title, artist, cover art
   - Start playing via HTML5 audio
   - Be downloadable with the title as the filename

---


## 🧑‍💻 Author

**Your Name**  
GitHub: ([https://github.com/milanprajapati571](https://github.com/milanprajapati571))

---


