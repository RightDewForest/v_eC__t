import { 
    setMessage,
    getChannels
} from './mutation-types'   

export default{
    [getChannels] ({commit}) {
        fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels').then((response)=>{
            return response.json
        }).then((json)=> {
            commit(getChannels, json.channels)
        })
    },
    [setMessage] ({commit}, message) {
        commit(setMessage, message)
    },

}