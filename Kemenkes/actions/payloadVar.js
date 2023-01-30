
  /**
   * gawe set var
   * @title payload var
   * @category Custom
   * @author Your_Name
   * @param {any} value - Another Example value
   */
  const myAction = async (value) => {
    temp.selected = event.payload.text || event.payload.payload
  }

  return myAction(args.value)