let appHeader = `
    <!-- Navbar -->
	<div class="w3-top" style="font-family: Lato">
	  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
		<a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
		<a href="/~jldeyoung/index.html#home" class="w3-bar-item w3-button">HOME</a>
		<a href="/~jldeyoung/index.html#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
		<a href="/~jldeyoung/index.html#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
		<a href="/~jldeyoung/resume.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> RESUME</a>
		<a href="/~jldeyoung/Blog/index.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> BLOG</a>
	  </div>
	</div>
`;

let appFooter = `
	<footer id="myFooter">
    <div class="w3-container w3-theme-l1">
        <p class="pFooter">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        <p class="pFooter">Images by Juni L DeYoung &copy; 2021.</p>
    </div>
  </footer>
`;

document.getElementById("app-header").innerHTML = appHeader;
document.getElementById("app-footer").innerHTML = appFooter;

function hide_show(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
  } else {
	x.className = x.className.replace(" w3-show", "");
  }
}

/*
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
*/