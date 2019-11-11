import { mapGetters, mapActions } from 'vuex'
import { GET_CHANNELS } from '../../store/mutation-types'

export default{
  name: 'chat',
  mounted(){
    this.GET_CHANNELS()
    this.GET_MESSAGES(this.$route.params.cname)
  },
  computed:{
    ...mapGetters([
      'messages',
      'channels',
    ]),
  },
  methods: {
    ...mapActions([
      // SET_MESSAGE,
      GET_CHANNELS,
      "GET_MESSAGES",
      "POST_MESSAGES",
    ]),
    send_message(){
      // this.SET_MESSAGE(this.message) // this.messages.push(this.message) -> this.SET_MESSAGE(this.message)
      this.POST_MESSAGES({"cname": this.$route.params.cname, "message": this.message})
      this.message = " "
    },
  },
  data() {
    return {
      // channels: ["test", "general", "random", "hello"],
      message: "",
    }
  }
}