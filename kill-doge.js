//console.log("SCRIPT INITIALIZED");

// Get first element of parsed HTML as logo
let svgLogo = $.parseHTML('<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"style="fill:#3BA9EE;">')[0];

// Set sizes for home icon
svgLogo.style.width = "50px";
svgLogo.style.height = "50px";

// Copy icon and set sizes for loading icon 
let svgLoading = svgLogo.cloneNode(true);
svgLoading.style.width = "72px";
svgLoading.style.height = "72px";

// Track site changes
addDocumentObserver(documentCallback);

// Registers MutationObserver
function addDocumentObserver(callback) {
	// Initialize localStorage flag to prevent infinite looping from document updates
	localStorage.setItem("isLoadingIconReplaced", "false");
	const config = {attributes: false, childList: true, subtree: true};
	const docObserver = new MutationObserver(callback);
	docObserver.observe(document.documentElement, config);
}

// Utility fn to copy over element attributes to preserve styling as much as possible
function copyAttributes(srcElement, destElement) {
	Object.values(srcElement.attributes).forEach(elementAttr => {
		destElement.setAttribute(elementAttr.name, elementAttr.value);
	})
}

// Track all document changes
function documentCallback(mutations, observer) {
	//console.log("DOCUMENT LOAD CALLBACK");
	// Targeted elements
	let loadingPlaceholder = document.getElementById("placeholder");
	let twitterLinkSelector = "#react-root * header * h1 > a[href=\"/home\"]";
	let twitterLink = document.querySelector(twitterLinkSelector);
	
	// Track if loading was already replaced to prevent an infinite loop
	let isLoadingIconReplaced = localStorage.getItem("isLoadingIconReplaced");
	// Replace loading icon
	if(loadingPlaceholder && isLoadingIconReplaced === "false") {
		//console.log("LOADING HOOK");
		localStorage.setItem("isLoadingIconReplaced", "true");
		let svgTarget = loadingPlaceholder.firstChild;
		// Copy attributes and replace loading icon
		copyAttributes(svgTarget, svgLoading);
		svgTarget.replaceWith(svgLoading);
	}
	// Replace home link icon
	if(twitterLink) {
		//console.log("LINK", twitterLink);
		const svgTarget = twitterLink.firstChild.firstChild;
		// Check if svg graphic is loaded yet to replace it
		if(svgTarget) {
			// Copy attributes, replace home icon, and disconnect MutationObserver listener
			copyAttributes(svgTarget, svgLogo);
			svgTarget.replaceWith(svgLogo);
			observer.disconnect();
		}
	}
}