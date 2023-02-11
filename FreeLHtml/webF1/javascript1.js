import * as importAdmin from '../scriptImport.js'

$(document).ready(
    function() {

        const childrenConstructor = $('body > #wrapper').children()
        const elementConstructor = childrenConstructor.children()

        elementConstructor.each(function(indexA, elementAsigm) {
            
            if (Boolean(indexA === 1)) {

                const dataForm = {
                    username : "ghgTagsdds",
                    password : "styleDivbde",
                    "e-mail" : "e-GappMask"
                }

                $(elementAsigm)
                                .find(".ajaxForm")
                                                .on("submit", function(eventF) {

                                                    const formAjax = $(elementAsigm).find(".ajaxForm")

                                                    $.ajax({

                                                        method : formAjax.prop("get"),
                                                        url : formAjax.prop("action"),
                                                        
                                                        cache : false,

                                                        success : function(dataY) {
                                                            
                                                            formAjax.children("#group").children(".inputAjax").each(function(indexI, elemI) {

                                                                formAjax.find(".ajaxEndValue")
                                                                                            .removeClass("badR goodR")
                                                                $("input.inputAjax")
                                                                                    .removeClass("badR goodR")

                                                                if ($(".inputAjax").toArray().every(function(inputAj) {
                                                                        if ($(inputAj).val().length >= 8 &&
                                                                            $(inputAj).val().length <= 16) {
                                                                                return true
                                                                        }
                                                                        return false
                                                                    }) ) {

                                                                    dataY["personalProfiels"][`profile${dataY[
                                                                        "personalProfiels"].length+1}`] = {}
                                                                            
                                                                    dataY["personalProfiels"][`profile${dataY[
                                                                        "personalProfiels"].length+1}`][`${$(elemI).attr("name")}`] = $(elemI).val()


                                                                    formAjax.find(".ajaxEndValue")
                                                                                                .html(`You could logIn successfuly, 
                                                                                                     ${dataY["personalProfiels"][`profile${dataY[
                                                                                                     "personalProfiels"].length+1}`][`${$(elemI).attr("name")}`]
                                                                                                    }...`.normalize("NFKD"))
                                                                                                .addClass("goodR")
                                                                    $("input.inputAjax")
                                                                                    .addClass("goodR")

                                                                } else {

                                                                    formAjax.find(".ajaxEndValue")
                                                                                            .html(`Length is not iterable.`)
                                                                                            .addClass("badR")
                                                                    
                                                                    $("input.inputAjax")
                                                                                    .addClass("badR")
                                                                    
                                                            }})
                                                            
                                                        }
                                        
                                                    })

                                                    eventF.preventDefault()
                                                })
                                                .prop({
                                                    method : "get",
                                                    action : "scriptJson.json",
                                                })
                                                .children().each(

                                                    function(indexF, elemF) {

                                                        if (!Boolean($(elemF).is("br"))) {

                                                            if (Boolean($(elemF).is('#ajaxRequest'))) {

                                                                $(elemF)
                                                                        .html('ClickToSubmit')

                                                            } else {

                                                                if (Boolean($(elemF).is('#group'))) {
                                                                                        
                                                                    $(elemF)
                                                                            .children()
                                                                                    .attr({
                                                                                            class :  function() {
                                                                                                return (indexF == 1) ? "username" : 
                                                                                                        (indexF == 2) ? "password" : "e-mail"
                                                                                            } (), 
                                                                                    })
                                                                                    .html(
                                                                                        function() {       
                                                                                            return $(elemF).children().attr("class")
                                                                                        } ()
                                                                                    )
                                                                     $(elemF)
                                                                            .find("input")
                                                                                        .prop({
                                                                                                name : function() {
                                                                                                    return `${dataForm[`${$(elemF).children().attr("class")}`]}`
                                                                                                } (),
                                                                                                type : function() {
                                                                                                    return `${($(elemF).children().attr("class") === "password")
                                                                                                     ? $(elemF).children().attr("class") : "text"}`
                                                                                                } (),
                                                                                                placeholder :  function() {
                                                                                                    return `${dataForm[`${$(elemF).children().attr("class")}`]}`
                                                                                                } (),
                                                                                                minlength : function() { 
                                                                                                    return 10 
                                                                                                } (),
                                                                                                maxlength : function() { 
                                                                                                    return 16
                                                                                                } (),
                                                                                            })
                                                                                        
                                                                                        .on({"change" : function() {
                                                                                                $(this)
                                                                                                    .removeClass("badR")
                                                                                            }, 
                                                                                        })
                                                                                        .addClass("inputAjax")

                                                                } else if (Boolean($(elemF).is('.ajaxName'))) {

                                                                    $(elemF)   
                                                                            .html("<br>Lending<br><br>")

                                                                }

                                                            }
                                                        }

                                                    }
                                                )

            }
        })

        $(importAdmin.nativeValues$['jQueryAdmins']['window']).on({'resize': function(){
            location.reload()
        }});
        
    }
)  