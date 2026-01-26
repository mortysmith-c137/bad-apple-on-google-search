# Bad Apple on Google Search

Play the Bad Apple video directly inside the Google Search page using a userscript.

This project injects a video background into Google when searching for "Bad Apple".  
It runs locally with a small Python server and a ScriptCat userscript.

---
## Demo video
[![Watch Demo](https://img.youtube.com/vi/e8lJXAa-5Rg/0.jpg)](https://www.youtube.com/watch?v=e8lJXAa-5Rg)

## Requirements

- [Python](https://www.python.org/)
- [ScriptCat](https://github.com/scriptscat/scriptcat)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/mortysmith-c137/bad-apple-on-google-search.git
cd bad-apple-on-google-search
```
### 2. Download Bad Apple!! Video:
```bash
pip install yt-dlp
yt-dlp --merge-output-format mp4 -o badapple.mp4 https://www.youtube.com/watch?v=FtutLA63Cp8
```
### 3. Import ```badapple-userscript.js``` into ScriptCat.

## Usage

### 1. Start the local server:
```bash
python -m http.server 8000
```
### 2. Search for "Bad Apple" and click anywhere on the page.
