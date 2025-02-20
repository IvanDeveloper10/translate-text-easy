# Text Translator Extension

## Description
This Chrome and Firefox extension allows you to translate selected text on any webpage with a right-click. It uses the Google Translate API to display the translation in a notification popup.

## Features
- Translates selected text into Spanish.
- Activated via the context menu (right-click).
- Displays translation in a notification popup.

## Installation
### In Google Chrome:
1. Download the extension files and save them in a folder.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** in the upper right corner.
4. Click **Load unpacked** and select the extension folder.

### In Mozilla Firefox:
1. Download the extension files and save them in a folder.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file from the extension.

## Included Files
- `manifest.json`: Defines the extension's settings and permissions.
- `background.js`: Contains the translation logic and context menu handling.
- `icon.png`: Extension icon.

## Usage
1. Select any text on a webpage.
2. Right-click and choose **Translate text** from the menu.
3. The translation will appear in a notification popup.

## Notes
- This extension uses the public Google Translate API.
- There may be limitations on the number of translations allowed by Google.

## License
This project is open-source under the MIT license.

