import {
    setMessage,
    getChannels,
} from './mutation-types'

export default {
    [setMessage] (state, message) {
        state.messages.push(message)
    },
    [getChannels] (state, channels) {
        state.channels = channels
    },
}