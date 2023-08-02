# Kill Twitter Doge
**IMPORTANT!**  
  USE AT YOUR OWN RISK! EXPECT THIS TO BREAK AT A LATER TIME WHEN TWITTER UPDATES! MAY CAUSE A BROWSER CRASH AND LOSS OF SESSION DATA IN THE WORST CASE!  
ONCE THE TWITTER LOGO IS SWITCHED BACK TO THE BIRD, DISABLING THIS ADDON IS HIGHLY RECOMMENDED!  
MANUAL INSTALLATIONS MUST BE MANAGED BY THE USER AND I CANNOT PROVIDE AUTOMATIC UPDATES OR BUGFIXES. ANY NEW UPDATES WOULD REQUIRE MANUALLY DOWNLOADING CHANGES AND UPDATING MANUALLY THROUGH THE INSTALLATION PROCESS OUTLINED BELOW. THIS IS A HACK AND IT IS NOT MY INTENT TO SUPPORT THIS EXTENSION AS IT CURRENTLY EXISTS LONG TERM.  
AGAIN, USE THIS AT YOUR OWN RISK!

Remove and replace the terrible Doge loading screen and home icons with the regular Twitter icons.

## Compatibility
- Tested on Google Chrome for now. This may work fine on Firefox without modification but I haven't bundled or tested for it yet. 
- Requires developer mode to be enabled from the extensions page (instructions on installation section). This extension is NOT available on the Chrome Web Store at this time.

## Security and data usage
- Accesses data only from the Twitter site. **Data accessed is minimal and only used to monitor page changes and replace content. No user data is saved or sent to external servers.** Developers can audit to ensure this themselves as outlined in the following section.
- (Developers) This extension relies on jQuery as an external dependency to parse HTML. This extension uses jquery-3.6.4.slim.min.js. Official download links are provided below.

## (Developers) Optionally self audit the code
If you are comfortable with Javascript and wish to briefly audit the code for security, you should review the contents of kill-doge.js. Note that minimal jQuery is used and no data is sent to other servers. Only one flag is set to local storage, which is crucial to prevent the extension from running in an infinite loop and crashing the browser. If you are familiar with Chrome Extensions, the kill-doge.js file executes as a content script with the "tabs" permission and only on the Twitter site. This can be verified from the manifest.json file.  

Also note that since the jquery-3.6.4.1.slim.min.js file is required to be downloaded from the jQuery site, we are trusting the jQuery site to have a reliable and untampered version of this library. The library is not bundled with this extension and is instead a required install for this reason.

## Installation instructions
**Download jQuery library file and use Chrome Developer Mode to install an extension that is not on the Chrome Web Store**

1. Download as a ZIP file and extract the project (or with git installed `git clone` the repo and skip to step 2).
   * Left click the green on on the top right of this page
   * Click "Download ZIP" and save to any temporary location you can work in.
   * Extract the ZIP file and note the path to the src folder. The src folder contains the extension code and is used for installation in the next steps.
2. Download jquery-3.6.4.slim.min.js and save it in the src directory with kill-doge.js and manifest.json
   * [Official jQuery download page](https://jquery.com/download/)
   * **Easier way** Direct link to the required library version: [jquery-3.6.4.slim.min.js](https://code.jquery.com/jquery-3.6.4.slim.min.js) (Note the jquery.com domain)
    - Right-click, click "Save link as", save file into src folder. Or click to follow the link, right click the page, click "Save as" into the src directory. Same thing.
   * **IMPORTANT:** If you save the wrong version to the src folder the extension will fail with errors.
3. Go to Chrome Extensions (chrome://extensions/) and ensure that "Developer mode" is toggled ON from the extensions page (top right corner)
4. Drag the src folder with the three files onto the same extension page, or click the "Load unpacked" button from the top left, navigate to the src folder, and add the whole folder.

**AFTER INSTALLATION**
- "Kill Twitter Doge" should now be enabled and appear with any other installed extensions as an unpacked extension.
- Once installed, navigating to any Twitter page should eliminate the Doge. Works fine for me on Chrome but it could still lag or crash on Twitter updates or in rare situations.
- All files used to install the extension should be removed. Refer to this GitHub repo for changes to this extension. **THIS EXTENSION HAS NO WAY TO AUTOMATICALLY UPDATE**
