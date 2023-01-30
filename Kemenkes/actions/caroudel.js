  /**
   * gawe generate action
   * @title Action Generator
   * @category Utility
   * @author timBotpress
   * @param {any} type - content
   * @param {any} key - anu
   */
  const createAction = async (type, key) => {
    const items = session.response.body.data

    switch (type) {
      case 'carousel': {
        let carousel = []
        bp.logger.info('Ini data yang dicari:' + JSON.stringify(items))

        items.forEach((e, i) => {
          carousel.push({
            title:e,
            image: e['Img'],
            actions: [
              {
                action: 'Postback',
                payload:e,
                title: key == 'product' ? 'Lihat Detail' : 'Pilih'
              }
            ]
          })
        })

        const payloads = await bp.cms.renderElement(
          'builtin_carousel',
          {
            items: carousel
          },
          event
        )

        return await bp.events.replyToEvent(event, payloads)
      }
    }
  }

  return createAction(args.type, args.key)