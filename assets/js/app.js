	var cl=console.log;
	
	
	const showsidebar = document.getElementById("showsidebar")
	const sidebar = document.getElementById("sidebar")
	const backdrop = document.getElementById("backdrop");
	const closesideicon = document.querySelector(".sidebar i");

	// const showsidebarhandler = () => {
				// sidebar.classList.add("active");
		// }


	const hideshowsidebarhandler = () => {
		sidebar.classList.toggle("active");
		backdrop.classList.toggle("active");
	 }







	showsidebar.addEventListener("click", hideshowsidebarhandler);
	closesideicon.addEventListener("click",hideshowsidebarhandler);
	backdrop.addEventListener("click", hideshowsidebarhandler)