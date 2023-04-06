# Kill Twitter Doge
Undo the terrible doge loading screen and home icons and replace them with the regular Twitter icons.
It's not perfect but it gets the job done.

## Compatibility
- Tested on Google Chrome for now. This may work fine on Firefox without modification but I haven't bundled or tested for it yet. 
- Requires Developer Mode to be enabled. This extension is not available on the Chrome Web Store

## Security and permissions
- Accesses data only from the Twitter site. Data accessed is minimal and only used to monitor page changes and replace content. No data is sent to external servers.
- Source code is available in the src folder. You can review the contents of the src folder and install the extension from the src folder. If you are familiar with Javascript you should be able to review the extension code to determine whether or not you trust it.
- This extension does rely on the minified jQuery to parse HTML. This extension uses jquery-3.6.4.slim.min.js. It is not bundled from here for the sake of a "no trust" installation approach. It is more secure to download the library from a trusted source instead of relying on me bundling the library without modifications. Downloading the library is as simple as downloading a file and I provide official links below.

## Safe installation instructions
**Download jQuery library file and use Chrome Developer Mode to install an extension that is not on the Chrome Web Store**
- Download the src directory to some temporary directory on your pc
- Download jquery-3.6.4.slim.min.js and save it in the src directory with kill-doge.js and manifest.json
  - [Official jQuery download page](https://jquery.com/download/)
  - [Direct link to the required jquery-3.6.4.slim.min.js library file](https://code.jquery.com/jquery-3.6.4.slim.min.js) (Right-click, click Save as, save into src folder)
  - IMPPORTANT: If you save the wrong version to the src folder the extension will fail with errors.
- Go to Chrome Extensions (chrome://extensions/) and ensure "Developer mode" is toggled ON from the extensions page (top right corner)
- Drag the src folder with the three files onto the same extension page, or click the "Load unpacked" button from the top left, navigate to the src folder, and add the whole folder.
- "Kill Twitter Doge" should now be installed and enabled

Once installed, navigating to any Twitter page should eliminate the Doge. Works fine for me but it could still lag or crash, idk.

