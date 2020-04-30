import {ADD_BOOk,REMOVE_BOOk,BookType} from '../action/bookQuery';


export default (state:string[] = [],action:BookType) => {
    switch(action.type) {
        case ADD_BOOk:
            return [... state,action.name]
        case REMOVE_BOOk:
            return state.filter( item => item !==  action.type)
        default:
            return state
    }
}