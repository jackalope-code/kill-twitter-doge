# Kill Twitter Doge
Remove and replace the terrible Doge loading screen and home icons with the regular Twitter icons.
It's not perfect but it gets the job done.

## Compatibility
- Tested on Google Chrome for now. This may work fine on Firefox without modification but I haven't bundled or tested for it yet. 
- Requires developer mode to be enabled from the extensions page (instructions on installation section). This extension is NOT available on the Chrome Web Store at this time.

## Security and data usage
- Accesses data only from the Twitter site. **Data accessed is minimal and only used to monitor page changes and replace content. No user data is saved or sent to external servers.** Developers can audit to ensure this themselves as outlined in the following section.
- (Developers) This extension does rely on the minified jQuery to parse HTML. This extension uses jquery-3.6.4.slim.min.js. It is not bundled from here for the sake of a "no trust" installation approach. It is more secure to download the library from a trusted source instead of relying on me bundling the library without modifications. Official download links are provided below.

## (Developers) Optionally self audit the code
If you are comfortable with Javascript and wish to briefly audit the code for security, you should review the contents of kill-doge.js. Note that minimal jQuery is used and no data is sent to other servers. Only one flag is set to local storage, which is crucial to prevent the extension from running in an infinite loop and crashing the browser. If you are familiar with Chrome Extensions, the kill-doge.js file executes as a content script with the "tabs" permission and only on the Twitter site. This can be verified from the manifest.json file.

## Safe installation instructions
**Download jQuery library file and use Chrome Developer Mode to install an extension that is not on the Chrome Web Store**
1. Download the src directory to some temporary directory on your pc.
2. Download jquery-3.6.4.slim.min.js and save it in the src directory with kill-doge.js and manifest.json
  - [Official jQuery download page](https://jquery.com/download/)
  - **Easy way** Direct link to the required library version: [jquery-3.6.4.slim.min.js](https://code.jquery.com/jquery-3.6.4.slim.min.js) (Note the jquery.com domain)     - Right-click, click Save link as, save file into src folder. Or click to follow the link, right click the page, click "Save as" into the src directory. Same thing.
  - IMPPORTANT: If you save the wrong version to the src folder the extension will fail with errors.
- Go to Chrome Extensions (chrome://extensions/) and ensure "Developer mode" is toggled ON from the extensions page (top right corner)
- Drag the src folder with the three files onto the same extension page, or click the "Load unpacked" button from the top left, navigate to the src folder, and add the whole folder.
- "Kill Twitter Doge" should now be installed and enabled

Once installed, navigating to any Twitter page should eliminate the Doge. Works fine for me but it could still lag or crash, idk.

