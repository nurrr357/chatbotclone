  const kenangan = require('moment')

  /**
   * Small description of your action
   * @title format tgl
   * @category Custom
   * @author nubers
   * @param {any} value - Another Example value
   */
  const myAction = async moment => {
    
    temp.format = kenangan(`${session.response.body.data[0].TTL}`).format('LL')
  }

  return myAction(args.moment)