

// async function getMeaning() {
//     try{
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }catch(error){
//     console.log(error)
// }

    
// }

// getMeaning()



let input = document.querySelector('input')
let faXmark = document.querySelector('.fa-xmark')
faXmark.addEventListener('click',(e)=>{
    
    input.value = ""
})

input.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let  inputKey = input.value
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputKey}`
        fetch(url).then(function(response){
            return response.json()
        }).then(function(data){
            let h4 = document.querySelector('h4')
            h4.innerHTML = `${data[0].word}`
            let pos = document.querySelector('.Pos')
            pos.innerHTML = `${data[0].meanings[0].partOfSpeech}`

            let meanings = document.querySelector('.define')
            meanings.innerHTML = `${data[0].meanings[0].definitions[0].definition}`

            let example = document.querySelector('.exmp')
            example.innerHTML = `${data[0].meanings[0].definitions[0].example}`

            let synonym = document.querySelector('.synonymWords')
            
            synonym.childNodes[0].innerHTML = `${data[0].meanings[0].synonyms[0]}`
            synonym.childNodes[2].innerHTML = `${data[0].meanings[0].synonyms[1]}`
            synonym.childNodes[4].innerHTML = `${data[0].meanings[0].synonyms[2]}`
            synonym.childNodes[6].innerHTML = `${data[0].meanings[0].synonyms[3]}`

            let faVolume = document.querySelector('.fa-volume-high')

            let audioUrl = data[0].phonetics[1].audio

            faVolume.addEventListener('click', function(){
                let voice = document.querySelector('audio')
                voice.setAttribute('src',audioUrl)
                voice.play(function(){

                }).then(function(){
                    console.log("audio play successfully")
                }).catch(function(){
                    console.log("error")
                })
            })
            


            input.value = ""
        }).catch(function(error){
            console.log(error)
        })
    }
})




