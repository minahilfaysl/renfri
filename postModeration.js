function postModerator(text) {

    const wordList = ["alcohol", "lsd", "ecstacy", "weed", "roofies", "heroin", "cocaine", "crack", "marijuana", "mdma", "molly", "codeine", "fentanyl", "demerol", "morphine", "oxy", "oxycodone", "oxymorphine", "tramadol", "meth", "amphetamine", "antidepressants", "steroids", "booze", "benzos", "stimulants", "methamphetamine", "flakka", "krokodil", "cannabis", "dope", "hash", "inhalants", "ketamine", "ghb", "hallucinogens", "drugs", "dugs"]
    
    const postWords = text.split(" ");

    for (let i = 0; i < postWords.length; i++) {
        
        // check if word present in list
        if (wordList.includes(postWords[i].toLoerCase())) {
            return false
        }

        else {
            return true
        }
      }
}