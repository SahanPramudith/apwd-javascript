console.log("sahan");

function sameName() {
    const frist = document.getElementById('name-1').value
    const last = document.getElementById('name-2').value

    console.log(frist,last);

    if (frist==last) {
        document.getElementById('dis1').innerText ="Sucses..."
    } else {
        document.getElementById('dis1').innerText ="Fail..."
        
    }
}

// ..................................

// function nuber() {
//     const nuber1 =document.getElementById('nuber-1').value
//     const nuber2 =document.getElementById('number-2').value

//     if (nuber1<nuber2) {
//         document.getElementById('dis2').innerTex = nuber1
//     } else if (nuber1==nuber2) {
//         document.getElementById('dis2').innerTex = "same"
        
//     }else {
//         document.getElementById('dis2').innerTex = nuber2
        
//     }
// }



function number() {
    let frist =document.getElementById('number-1').value
    let last =document.getElementById('number-2').value

    if (frist>last) {
        document.getElementById('dis2').innerText=frist
    } else if (frist==last) {
        document.getElementById('dis2').innerText="same"
        
    } else{
        document.getElementById('dis2').innerText=last
        
    }
}

function grade() {
    var marks =document.getElementById('grade').value
    if (marks>=75) {
        document.getElementById('dis5').innerText="A"
    } else if (marks>=65) {
        document.getElementById('dis5').innerText="B"
    } else if (marks>=45) {
        document.getElementById('dis5').innerText="C"
    } else if (marks>=35) {
        document.getElementById('dis5').innerText="S"
    } else {
        document.getElementById('dis5').innerText="W"
    }
}

var mama ="pramudith"

switch (mama) {
    case "sahan":
        console.log("good");
        break;
    case "paramudith":
        console.log("very good");

    default:
        console.log("erro");
        break;
} 

function sw() {
    const sse=  document.getElementById('se').value
    var en =sse

switch (en) {
    case "intern":
        document.getElementById('dis6').innerText="Intern S E"
        break;
    case "ase":
        document.getElementById('dis6').innerText=" Associate S E"
    case "se":
        document.getElementById('dis6').innerText=" S E"
        break;
    case "sse":
        document.getElementById('dis6').innerText="Senior S E"
        break;
     case "atl":
        document.getElementById('dis6').innerText=" Assistant Tech Lead "
        break;
    case "tl":
        document.getElementById('dis6').innerText=" Tech Lead "
        break;

    default:
        console.log("erro");
        break;
} 
}


function save() {
    var sa = document.getElementById('sev').value

}



function log() {
    var ch = document.getElementById('usname').value
    var che = document.getElementById('pass').value

    var us = "sahan "
     var uss ="SAHAN"
    var pass= "123"

    if ( ch==us||ch==uss  ) {
        document.getElementById('dis88').innerText="ok"
    } else if (che==pass) {
        document.getElementById('dis88').innerText="ok"
    }else{
        document.getElementById('dis88').innerText="erro"
    }
}