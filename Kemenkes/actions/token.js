  /**
   * Generate nomor tiket baru
   * @title Generate no tiket
   * @category User
   * @author ner0z
   * @param {string} format - format tiket
   */
  const generateTicket = async format => {
    temp.noTiket = Math.floor(1000000 + Math.random() * 9000000).toString()
  }

  return generateTicket(args.format)