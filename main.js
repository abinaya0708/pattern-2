let n=20;
for(let i=1;i<=n;i++){
	for(k=1;k<=n-i;k++){
		document.write("&nbsp;&nbsp");
	}
	for(j=1;j<=i;j++){
		document.write("*");
	}
	document.write("<br>");
}

