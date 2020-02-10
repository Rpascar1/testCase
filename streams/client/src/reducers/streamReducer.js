import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types'


export default (state = {}, action) =>{
  switch(action.type) {

    case FETCH_STREAMS:
      const streams = {}
       action.payload.forEach(stream => {
         streams[stream.id] = stream
       })
      return {...state, ...streams }

    case FETCH_STREAM:
      return{...state, [action.payload.id]: action.payload}

    case CREATE_STREAM:
      return{...state, [action.payload.id]: action.payload}

    case EDIT_STREAM:
      return{...state, [action.payload.id]: action.payload}

    case DELETE_STREAM:
      return {...state,[action.payload]: undefined }
    default:
      return state;
  }
}
