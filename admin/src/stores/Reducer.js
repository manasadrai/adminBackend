import * as actionCreators from '../actions/actions'

const initialState = {
    returnedMessage: null,
    adminData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.LOGIN:
            let admin = action.data
            console.log('ADMIN LOGIN')
            console.log(admin)
            return {
                returnedMessage: 'WELCOME ADMIN ching!',
                adminData: admin
            }     
       

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                adminData: []
            }

        
        default:
            return state
    }
}

export default reducer;