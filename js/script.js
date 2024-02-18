let scbar = document.querySelector(".bar")


function scroll(){
    const windowScroll  = window.scrollY
    // Math.round(windowScroll)
    const windowHeight = window.innerHeight

    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )   
    const scrollpercent = (scrollY / (documentHeight - windowHeight)) * 100
    const finalvalue = scrollpercent.toFixed(0)
    console.log(finalvalue);
    scbar.style.width = `${finalvalue}%`
}

scroll()

window.addEventListener("scroll", scroll)