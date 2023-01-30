  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   */
  const myAction = async (name, value) => {
    var array = ['aqua', 'levite', 'vit', 'mizone']
    const myArray = name.split(' ')
    var hasil2 = myArray[1]
    array.forEach(function(e) {
      if (hasil2 === e) temp.hasil = 'benar'
      else temp.hasil = 'salah'
    })
  }

  return myAction(args.name, args.value)