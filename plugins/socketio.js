import io from 'socket.io-client'
import { API_URL } from '~/variables'

export default async({ app, redirect }) => {

  io.connect(API_URL)
  socket.emit('auth', { jwt: app.$store.getters['auth/jwt'] })
  socket.on('newTopic', (e) => {
    console.log(e)
    console.log('NOVOS TOPICOS')
    this.$store.dispatch('class/populateTopics').then(r => {
      this.$toast.info('Novo tópico adicionado!')
    })
  })

}