//Salima Fong
var cheesy = prompt("Is de kaas geel? Antwoord met 'ja' of 'nee'."); 

if (cheesy == "ja") {
	cheesy = prompt("Zitten er gaten in?");
		if (cheesy == "ja") {
			cheesy = prompt("Is de kaas belachelijk duur?");
				if (cheesy == "ja") {
					cheesy = alert("Emmenthaler");
						} else if (cheesy == "nee") {
							cheesy = alert("Leerdammer");
					}
				} else if (cheesy == "nee") {
					cheesy = prompt("Is de kaas hard als steen?");
						} if (cheesy == "ja") {
							alert("Parmigiano Reggiano");
								} else if (cheesy == "nee") {
									alert("Goudse Kaas");
		}
} else if (cheesy == "nee") {
			cheesy = prompt("Heeft de kaas blauwe schimmels?");
		if (cheesy == "ja") {
			cheesy = prompt("Heeft de kaas een korst?");
				if (cheesy == "ja") {
					cheesy = alert("Bleu de Rochbaron");
						} else if (cheesy == "nee") {
							cheesy = alert("Foume d'Ambert");
					}
				} else if (cheesy == "nee") {
					cheesy = prompt("Heeft de kaas een korst?");
						if (cheesy == "ja") {
							cheesy = alert("Camembert");
								} else if (cheesy == "nee") {
									cheesy = alert("Mozzarella");
							}
				} 
		}
		

	
	
			


