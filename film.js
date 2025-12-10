function search(){
    console.log("search")

    let inputTag = document.getElementById("input")
    let movieName = inputTag.value

    console.log(movieName)

    //20aca18
let htmlRequest = new XMLHttpRequest()
let url = "https://www.omdbapi.com/?apikey=5be20f0a&t=" + movieName

htmlRequest.open("GET", url)


htmlRequest.send()
htmlRequest.responseType = "json"
htmlRequest.onload = ()=>{
let response = htmlRequest.response
console.log(response)

let imgTag = document.getElementById("poster")
imgTag.src =response.Poster

let titleTag = document.getElementById("title")
titleTag.innerHTML = response.Title

let plotTag = document.getElementById("plot")
plotTag.innerHTML = response.Plot

let yearTag = document.getElementById("year")
yearTag.innerHTML = response.Year













}








//5be20f0a


}