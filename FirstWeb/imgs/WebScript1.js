const arrayLogin = {

    'teg' : new Array(

        'label', 'input', 'button', 'div'

        ),

};

const DictStorage = {

    'Reg': new Array(

        'name', 'tel-number', 'email', 'password', 'passwordVerification',

    ),

    'Login': new Array(

        'name', 'password',

    ),

};

const DictErrors = {

    ' "Sing in"  Form' : {

            'Reg': [
                'Bad Request [R]', 'Bad Request'
            ],

            'Login': [
                'Bad Request [L]', 'Bad Request'
            ],

        },

};

export function clearAllData(){

    localStorage.clear()

};

//clearAllData()

for (var obj in arrayLogin){
    for (let objI of arrayLogin[obj]){

        if (Boolean(obj == 'teg')){

            var tegDOC = document.querySelector(objI)

            if (Boolean(objI == 'button')){
                
                if (Boolean(tegDOC.getAttribute('id') == 'loginFormI2')){

                    if (Boolean(tegDOC.getAttribute('class') == 'Login' ||
                        tegDOC.getAttribute('class') == 'Reg')){
                        
                        tegDOC.onclick = function() {                                        
                            saveData(tegDOC, [5, null])
                        }
                        document.getElementById('loginFormI').addEventListener('click',
                            e=> {e.preventDefault()})
                        
                    }else{

                    }
                }

            }

            
        }
    }
};

var LoginTrueValues = [

    false,
    false,

]

export function saveData(stringArg, lenghtList) {

    // massive №1 :
    for (let storageI of DictStorage[stringArg.getAttribute('class')]){

        // it is just a test :
        document.getElementById(storageI.toString()
            ).style.backgroundColor = 'darkgray'
        stringArg.dir = 'Login2'
        
        // save all vallues in this diapozon :
        if (!Boolean(document.getElementById(storageI.toString()).value)){

            if (Boolean(DictStorage[stringArg.getAttribute('class')].length > 4)){

                if (!Boolean(localStorage.length == 5)){

                    document.getElementById(storageI.toString()).style.color =  'red'

                    document.getElementById(storageI.toString()).getAttribute('minlenght') = 8
                    document.getElementById(storageI.toString()).getAttribute('maxlenght') = 16

                    document.getElementById(storageI.toString()
                        ).style.backgroundColor = 'white'
                    stringArg.dir = 'Login1'

                }else{

                    document.getElementById(storageI.toString()).style.color = 'orange'
                    document.getElementById(storageI.toString()).value = 'You Have Passed!'

                }

            }else{

                document.getElementById(storageI.toString()).style.color =  'red'

                document.getElementById(storageI.toString()
                    ).style.backgroundColor = 'white'
                stringArg.dir = 'Login1'

                document.getElementById(storageI.toString()).getAttribute('minlenght') = 8
                document.getElementById(storageI.toString()).getAttribute('maxlenght') = 16

            }

        }else{
            

            if (Boolean(stringArg)){

                if (!Boolean(localStorage.length > lenghtList[0]) && 
                    DictStorage[stringArg.getAttribute('class')].length > lenghtList[0]-1){

                    //Regestration

                    if (Boolean(!localStorage.getItem(storageI.toString()))){

                        if (Boolean(document.getElementById(storageI.toString()).value.length > 8)){

                            localStorage[storageI.toString()] = document.getElementById(storageI.toString()).value

                            document.getElementById(storageI.toString()).style.color = 'green'
                            
                        }else{

                            document.getElementById(storageI.toString()).style.color = 'red'

                            document.getElementById(storageI.toString()
                                ).style.backgroundColor = 'white'
                            stringArg.dir = 'Login1'

                            document.getElementById(storageI.toString()).getAttribute('minlenght') = 8

                        }

                    }else{

                        if (!Boolean(localStorage.lenght)){

                            document.getElementById(storageI.toString()).style.color = 'orange'
                            document.getElementById(storageI.toString()).value = 'You Have Passed!'

                        }else{


                        }
                    }

                }else{

                    //Login
                    
                    if (Boolean(DictStorage[stringArg.getAttribute('class')].length < lenghtList[0]-1)){

                        if (!Boolean(document.getElementById(storageI.toString()).value == localStorage[storageI.toString()])){

                            document.getElementById(storageI.toString()).style.color = 'red'

                            document.getElementById(storageI.toString()
                                ).style.backgroundColor = 'white'
                            stringArg.dir = 'Login1'

                        }else{
                                        
                            document.getElementById(storageI.toString()).style.color = 'green'
                            document.querySelector('form').action = 'index4.html'
                          
                        }

                    //Regestration PASS
                        
                    }else{

                        document.getElementById(storageI.toString()).style.color = 'orange'
                        document.getElementById(storageI.toString()).value = 'You Have Passed!'

                    }
                
                }
            }
        }
    
    };

    // massive №2 :

    for (let storageI of DictStorage[stringArg.getAttribute('class')]){

      //  document.write(`<a href="index.html"><li>${localStorage[storageI.toString()]}: ${storageI}; Value: ${localStorage.length} </li></a>`);
        
    };

};

export function changeData(stringArg){

};

