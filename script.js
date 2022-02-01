const emailForm = document.querySelector(".emailForm");
const emailInput = document.querySelector(".emailInput");

fetch (`https://mailcheck.p.rapidapi.com/?domain=${}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mailcheck.p.rapidapi.com",
		"x-rapidapi-key": "a274d4f520msha6c4173bcca1c25p1ea8ccjsn3720fca77952"
	}
                            })
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});