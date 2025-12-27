# Spotify Clone

A personal **Spotify-like music player** built using **HTML, CSS, and JavaScript**. This project is a front-end prototype to explore music playback, UI interactions, and dynamic content rendering.  

## Features
- **Responsive Navbar:** Logo, home button, search bar, Explore Premium, Install App, notifications, and account.  
- **Search Bar Interaction:** Focus and blur effects for better UX.  
- **Expandable Library Sidebar:** Buttons for Playlists, Artists, Albums; dynamic song list.  
- **Playlist Cards:** Hover effect shows play button on cards; title and description display.  
- **Bottom Player Controls:** Play, pause, previous, next, and seekbar with draggable circle.  
- **Dynamic Song Loading:** Fetches all `.mp3` files from the `/songs` folder.  
- **Interactive Song List:** Click songs to play, time updates in real-time.  

## Installation & Usage
1. Clone the repository.  
2. Add your `.mp3` files to the `/songs` folder.  
3. Open `index.html` in a browser (or use Live Server for full functionality).  
4. Click songs or controls to play and navigate.  

## File Structure
project-root
│
├─ index.html # Main HTML file
├─ style.css # CSS styling
├─ script.js # JavaScript functionality
├─ /songs # Place your music files here
├─ logo.png
├─ img1.png ... img8.png

## Notes
- Works best on a **local server** due to JavaScript fetch for songs.  
- This is a **personal project** for learning and experimentation.  
