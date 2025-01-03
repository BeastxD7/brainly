
const randomHash = (len:number) => {

    let options = "qwertyuiopasdfghjklzxcvbnm1234567890"
    let length = options.length

    let randomString = ""

    for(let i=0 ; i<len ; i++){
    randomString += options[Math.floor(Math.random() * length)] 
    }

    return randomString
}

export default randomHash