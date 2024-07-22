

// axios -> 3rd party library -> sara data eksaath deti hai -> promise return krti hai -> json()❌

axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(d){
    console.log(d.data)
})
.catch(function(err){
    console.log(err)
})

// -----

async function getData(){
    let data = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data)
}
getData()

// ----------------------------------------------------------

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(d){
    // console.log(d.data)
   return d.json()
})
.then(function(resp){
    console.log(resp)
})
.catch(function(err){
    console.log(err)
})


// XMLHttpRequest() //BTS -> API CALLING









