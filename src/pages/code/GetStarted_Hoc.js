export default `/* src/hocs/Hoc.js */
import { hocBuilder } from 'reactizy'

import { withRouter } from 'react-dom-router'
import { withAlert } from 'react-alert'

export default hocBuilder({
    hocs: {
        alert: withAlert(),
        router: withRouter
    },
    thunks: {
        complexLogin: user => (dispatch, getState, user) => {
            setTimeout(() => dispatch('login', user), 2000)
        }
    },
    customs: {
        sayHello: function(name) {
            window.alert(\`Hello $\{name}\`)
        }
    }
)`
