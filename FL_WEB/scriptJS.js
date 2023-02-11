var tegList = new Array(

    'li', 'ul', 'u', 'a', 'div', 'button', 'input', 'label'
)

var navList = new Array(

    'ChatIdiots'

);

var functionsListID = {

    'native_': function(tegQ){

        nativeClick()
    },

    'native-class': function(tegQ){

        window.location = 'css.css'
    },

}

for (let teg of tegList){

    var tegALL = document.querySelectorAll(teg)
   
        for (let i = 0; i < tegALL.length; i++){

            if (teg == 'input'){

                tegALL[i].id = document.querySelectorAll('label')[i].getAttribute('for')
                tegALL[i].placeholder = (tegALL[i].id+Math.round(Math.random())).toString()

                document.querySelectorAll('button')[0].onclick = function(){
                    
                    for (let i = 0; i < tegALL.length; i++){

                        if (Boolean(tegALL[i].value)){
                        
                            if (!Boolean(localStorage.length)){

                                if (!Boolean(localStorage.getItem(tegALL[i].id))){

                                    localStorage[tegALL[i].id] = tegALL[i].value

                                }
                            }
                        }

                    }
                    
                    document.querySelectorAll('form')[0].action = 'index2.html'
                    
                }

            }else if (teg == 'div'){

                if (Boolean(tegALL[i].getAttribute('class') == "LoginForm")){
                    
                    if (Boolean(localStorage.length)){
                    
                        tegALL[i].innerHTML = `

                            <h3 style="text-align: center">You have successfully registered</h3><hr>

                        `
                    
                    }
                }

            }else if (teg == 'a'){

                if (tegALL[i].id == 'referens'){

                    let hrefList = { 'index.html': [

                        'https://coolgenerator.com/random-text-generator', 'index2.html', 'https://downsideup.org', 'index3.html'

                            ],

                                    'index2.html' : [

                        'index.html', 'index3.html'
                                     
                        
                                        
                            ]
                        }[location.href.match(/[\d\w-]+\.\w+$/)]

                    tegALL[i].href = hrefList[i]

                }

            }
        }
    
}


for (let funcID in functionsListID){

    let tegQ = document.getElementById(funcID)

    tegQ.onclick = function(){

        functionsListID[funcID](tegQ)

    }
    
}

export function nativeClick() {
    
    for (let nav of navList){

        if (!document.getElementById('native-class').innerHTML){

            document.getElementById('native-class').innerHTML = `<li id="1-nav"><u>${nav+"||"}</u></li><hr>`.toString()

            setTimeout(function(){

                document.getElementById('native-class').style.color = 'white'
                document.getElementById('native-class').style.fontFamily = 'Verdana, sans serif'

            }, 130)

            document.getElementById('native-class').style.color = 'grey'
            document.getElementById('native-class').style.fontFamily = 'Lucida Sans'

        }else{

            document.getElementById('native-class').innerHTML = ""

        }

    }
        
}


