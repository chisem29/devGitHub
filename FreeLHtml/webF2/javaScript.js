$(document).ready(() => {

    const $bodyHandler = $("body > #wrapper")

    Array.from($bodyHandler.children())
            .forEach((elemHandler) => {

                    $(elemHandler)
                                .fadeOut(6)
                                .fadeIn("fast")

                    switch ($(elemHandler).attr('class')) {

                        case 'wrap-header':

                            $(elemHandler)
                                .find(".header-context")
                                    .css({
                                        'margin-left' : () => {
 
                                            return Number(($(window).width() - $(elemHandler)
                                                    .find(".header-context")
                                                        .css("width").slice(0, 
                                                            $(elemHandler)
                                                    .find(".header-context")
                                                        .css("width").indexOf("px"))) / 2) + "px"
                                                            
                                        },
                                        "width" : `${$(window).width() / 1.8}px`
                                    })
                                    .animate({
                                        "opacity" : 0.85
                                    })

                                    .html(() => {
                                        return String((
                                            $(elemHandler).find(".header-context")
                                                    .text().length > 250) 
                                                ? `${$(elemHandler)
                                                    .find(".header-context").text().slice(0, 250)}...`
                                                : $(elemHandler)
                                                    .find(".header-context").text())
                                    })

                            break

                        case "wrap-main":

                            Array("Again it", "Retry it", "Create it")
                                    .forEach((elemSection, ind) => {
                                        $(elemHandler)
                                            .find(".main-section")
                                                .append(
                                                    `<div class="tab-${ind+1}"></div>`
                                                )      
                                                .find(`.tab-${ind+1}`)
                                                    .append(
                                                        `<div class="tabTitle-${ind+1}"></div>`
                                                    )    
                                                    .append(
                                                        `<div class="tabContent-${ind+1}" id="tabContent"></div>`
                                                    )
                                                    .append(
                                                        `<div class="tabMore-${ind+1}" id="more"></div>`
                                                    )   
                                                    .hover(
                                                        function() {
                                                            $(this)
                                                                .animate({
                                                                    "height" : "+=16",
                                                                    "width" : "+=16",
                                                                    "opacity" : "0.95"
                                                                }, "fast")
                                                                .find(`.tabContent-${ind+1}`)
                                                                    .html(`<br>${
                                                                        function() {
                                                                            return ($(elemHandler).find(".main-section")
                                                                                        .find(`.tab-${ind+1}`).find(`.tabContent-${ind+1}`).innerWidth() > 120) ? `${[
                                                                                "Discovered northward excited prosperous highest differed sex blushes unpleasing five given paid aware other resolution. Compliment certainly perceived deal direct securing fine.",
                                                                                "Against fanny has prudent known sons beloved. Theirs parlors speedily doors uneasy. Visited ladies income sir game company thought commanded sufficient.",
                                                                                "Elinor place vanity since forth no repair trees cannot written. Cause friend exeter because hung polite insipidity seemed."
                                                                            ][ind]}` : `container ...`
                                                                        } ()
                                                                    }`)
                                                        },
                                                        function() {
                                                            $(this)
                                                                .animate({
                                                                    "height" : "-=16",
                                                                    "width" : "-=16",
                                                                    "opacity" : "0.8"
                                                                }, "fast")
                                                                .find(`.tabContent-${ind+1}`)
                                                                    .html(`<br>${
                                                                        function () {
                                                                            return ($(elemHandler).find(".main-section")
                                                                                        .find(`.tab-${ind+1}`).find(`.tabContent-${ind+1}`).innerWidth() > 120) ? `${[
                                                                                "Discovered northward excited prosperous highest differed sex blushes unpleasing five given paid aware other resolution. Compliment certainly perceived deal direct securing fine.",
                                                                                "Against fanny has prudent known sons beloved. Theirs parlors speedily doors uneasy. Visited ladies income sir game company thought commanded sufficient.",
                                                                                "Elinor place vanity since forth no repair trees cannot written. Cause friend exeter because hung polite insipidity seemed."
                                                                            ][ind].slice(0, 100)}...` : `container ...`
                                                                        } ()
                                                                    }<br>`)
                                                        }
                                                    )
                                                    .animate({
                                                        "opacity" : 0.8
                                                    })
                                                    .find(`.tabTitle-${ind+1}`)
                                                        .html(`<br>${elemSection}`)
                                        $(elemHandler)
                                            .find(".main-section")
                                                .find(`.tab-${ind+1}`)
                                                    .find(`.tabContent-${ind+1}`)
                                                        .html(`<br>${
                                                            function () {
                                                                
                                                                return ($(elemHandler).find(".main-section")
                                                                            .find(`.tab-${ind+1}`).find(`.tabContent-${ind+1}`).innerWidth() > 120) ? `${[
                                                                    "Discovered northward excited prosperous highest differed sex blushes unpleasing five given paid aware other resolution. Compliment certainly perceived deal direct securing fine.",
                                                                    "Against fanny has prudent known sons beloved. Theirs parlors speedily doors uneasy. Visited ladies income sir game company thought commanded sufficient.",
                                                                    "Elinor place vanity since forth no repair trees cannot written. Cause friend exeter because hung polite insipidity seemed."
                                                                ][ind].slice(0, 100)}...` : `container ...`
                                                            } ()
                                                        }<br>`)
                                            
                                        $(elemHandler)
                                            .find(".main-section")
                                                .find(`.tab-${ind+1}`)
                                                    .find(`.tabMore-${ind+1}`)
                                                        .html(`<br> <a>*more <br></a>`)
                                                        .hover(
                                                            function() {
                                                                $(this)
                                                                    .css({
                                                                        "text-decoration" : "underline",
                                                                        "color" : "rgb(60, 55, 8)"
                                                                    })
                                                            }, 

                                                            function() {
                                                                $(this)
                                                                    .css({
                                                                        "text-decoration" : "auto",
                                                                        "color" : "black"
                                                                    })
                                                            }
                                                        )
                                                        .on("click", () => {
                                                            window.location.href = 
                                                                [
                                                                    "https://tlauncher.org/",
                                                                    "https://namemc.com/",
                                                                    "https://www.minecraft.net/ru-ru/download"
                                                                ][ind]
                                                        })
                            })

                            break

                        default :

                            $(elemHandler)
                                .find(".footer-networks")
                                    .append(`<div class="footerNetwork-Title"></div>`)
                            
                                    .find('.footerNetwork-Title')
                                        .html("<br>Social Networks")
                            $(elemHandler)
                                .find(".footer-networks")
                                    .append(`<div id="group"> </div>`)

                            $(elemHandler)
                                .animate({
                                    "opacity" : "0.68"
                                })
                                .find(".footer-corparation")
                                    .html(`<br><br>
                                        @Created by StandOff Academy
                                    <br>`)

                            Array("Twitch", "TeleGram", "Discord")
                                .forEach((elemNet, ind, arraySection) => {
                                    
                                        $(elemHandler)
                                            .find(".footer-networks")
                                                .find("#group")
                                                    .append(`<div class="footerNetwork-${ind+1}" id="footerNet"></div>`)
                                                    .find(`.footerNetwork-${ind+1}`)
                                                        .html(`${elemNet}`)
                                                        .hover(
                                                            function() {
                                                                $(this)
                                                                    .css({
                                                                        "text-decoration" : "underline",
                                                                        "font-weight" : "bolder",
                                                                        "font-size" : "17px",
                                                                        "color" : "rgb(60, 55, 8)"
                                                                    })
                                                            }, 

                                                            function() {
                                                                $(this)
                                                                    .css({
                                                                        "text-decoration" : "auto",
                                                                        "font-weight" : "inherit",
                                                                        "font-size" : "19px",
                                                                        "color" : "black"
                                                                    })
                                                            }
                                                        )
                                                        .on("click", () => {
                                                           window.location.href = 
                                                                [
                                                                    "https://www.twitch.tv/stolar121", 
                                                                    "https://web.telegram.org/@me", 
                                                                    "https://discord.com/channels/@me"
                                                                ][ind]
                                                        })
                                                
                                })

                            break

                    }          

            })

    $(window)
        .on("resize", () => {
            window.location.reload()
        })

})