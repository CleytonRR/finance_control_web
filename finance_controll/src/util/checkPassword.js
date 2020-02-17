class validatorPassword {
    static testePass (password) {
      const regexTest = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      if (regexTest.test(password)) {
        return true
      }
      return false
    }
  }
  
  module.exports = validatorPassword