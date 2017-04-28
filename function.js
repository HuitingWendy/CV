window.onload = function(){
	/* flag */
	var circles = document.querySelectorAll(".circle");
	var circlesArr = Array.prototype.slice.call(circles);
	circlesArr.forEach(function(elem,index,arr){
		var pieLeft = elem.querySelector(".pie_left");
		var pieRight = elem.querySelector(".pie_right");
		var mask = elem.querySelector(".mask");
		var percent = mask.getAttribute("data-percent");
		if(percent <= 50){
			pieRight.style.transform = "rotate("+(percent*3.6)+"deg)";
		}else{
			pieRight.style.transform = "rotate("+(percent*3.6)+"deg)";
			pieLeft.classList.add("on");
		}
	});


	/* pro-skill */
	var skills = document.querySelectorAll(".skill-item");
	var skillsArr = Array.prototype.slice.call(skills);
	skillsArr.forEach(function(elem,index,arr){
		var percent = parseInt(elem.querySelector(".percent-num").textContent);
		var percentBar = elem.querySelector(".percent i");
		percentBar.style.width = percent + "%";
	});

	/* nav bar*/
    var navBtn = document.getElementById("location-btn");
    var navList = document.getElementById("location");
    var isShow = false;
    navBtn.onclick = function(){
        if(!isShow){
            navList.style.display = "block";
            isShow = true;
        }else{
            navList.style.display = "none";
            isShow = false;
        }
    };
};

function Alert(){
	window.alert("Welcome");
}
