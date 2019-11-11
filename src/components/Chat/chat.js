import { mapGetters, mapActions } from 'vuex'
import { getChannels, setMessage } from '../../store/mutation-types'

export default{
  name: 'chat',
  mounted(){
    this.getChannels()
  },
  computed:{
    ...mapGetters([
      'messages',
      'channels',
    ]),
  },
  methods: {
    ...mapActions([
      setMessage,
      getChannels,
    ]),
    sendMessage(){
      this.setMessage(this.message) // this.messages.push(this.message) -> this.setMessage(this.message)
      this.message = ""
    },
  },
  data() {
    return {
      // channels: ["test", "general", "random", "hello"],
      message: "",
    }
  }
}