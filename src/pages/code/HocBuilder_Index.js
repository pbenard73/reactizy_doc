export default `// hoc/Hoc.js
import { hocBuilder } from 'reactizy'

import { withRouter } from 'react-dom-router'
import { withAlert } from 'react-alert'

import SplittedCompo from './../partial/SplittedCompo

export default hocBuilder({
    hocs: {
        alert: withAlert(),
        router: withRouter
    },
    customs: {
        showSomething: function(text) {
            alert(text)
        }
    },
    thunks: {
        complexLogin: user => (dispatch, getState, user) => {
            setTimeout(() => dispatch('login', user), 2000)
        }
    },
    fusion: [
        {
            uses: ['alert'],
            state: ['user'],
            actions: [],
            component: () => SplittedCompo
        }
    ],
    options: {
        name: 'execute' // default 'call'
    }
})
`
