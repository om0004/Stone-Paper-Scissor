var num;
var x=document.createElement("img");
var p=document.createElement("img");
var count=0;
var ccount=0;
function fun(a)
{
	num=Math.floor(Math.random()*3+1);
	if(num==a){
		count++;
		ccount++;
		if(num==1){
			x.src=".\\icons\\rock.png";
			p.src=".\\icons\\rock.png";	
		}
		else if(num==2){
			x.src=".\\icons\\paper.png";
			p.src=".\\icons\\paper.png";	
		}
		else if(num==3){
		 x.src=".\\icons\\scissors.png";
		 p.src=".\\icons\\scissors.png";	
		}
		document.getElementById("result").innerHTML='Tie';
	}
	else if(num==1&& a==2){
		x.src=".\\icons\\rock.png";
		console.log('rock');
		document.getElementById("result").innerHTML='Player Wins!';
		p.src=".\\icons\\paper.png";
		ccount++;
	}
	else if(num==1 && a==3){
		x.src=".\\icons\\rock.png";
		document.getElementById("result").innerHTML='Computer Wins!';
		p.src=".\\icons\\scissors.png";
		count++;
	}
	else if(num==2&&a==1){
		x.src=".\\icons\\paper.png";
		document.getElementById("result").innerHTML='Computer Wins!';
		p.src=".\\icons\\rock.png";
		count++;
	}
	else if(num==2&&a==3){
		x.src=".\\icons\\paper.png";
		document.getElementById("result").innerHTML='Player Wins!';
		p.src=".\\icons\\scissors.png";
		ccount++;
	}
	else if(num==3&&a==1){
		x.src=".\\icons\\scissors.png";
		document.getElementById("result").innerHTML='Player Wins!';
		p.src=".\\icons\\rock.png";
		ccount++;
	}
	else if(num==3&&a==2){
		x.src=".\\icons\\scissors.png";
		document.getElementById("result").innerHTML='Computer Wins!';
		p.src=".\\icons\\paper.png";
		count++;
	}
	document.getElementById("score").innerHTML=count+':'+ccount;
	var y=document.getElementById("inner");
	var old=y.children[0];
    x.style.width = "105px";
    x.style.height = "105px";
    x.style.marginTop="-25px"
    x.setAttribute("alt", "Rock");
	y.replaceChild(x,old);
	
	var q=document.getElementById("inner3");
	var play=q.children[0];
    p.style.width = "105px";
    p.style.height = "105px";
    p.style.marginTop="-25px"
    p.setAttribute("alt", "Rock");
	q.replaceChild(p,play);
}