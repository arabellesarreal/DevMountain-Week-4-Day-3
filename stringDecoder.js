function decoder(code){
    var num = ''
    var result = ''
    for(var i = 0; i < code.length; i++){
        if(code[i] <= 9){
            i = i + 1 + parseInt(code[i])
            result += code[i]
        }
        result.concat(code[i])
    }
    console.log(result)
}
decoder('0h2xce5ngbrdy')
decoder('3vdfn')
decoder('0r')
decoder('2bna0p1mp2osl0e')
decoder('0y4akjfe0s')