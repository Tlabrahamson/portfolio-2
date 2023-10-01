import react, { useReducer } from 'react'

function useProjectState() {
        const [state, dispatch] = useReducer((state: any, action: any) => {
        switch(action.type) {
        case 'SET_VISIBLE':
            return { ...state, visible: action.visible }
        case 'SET_LOADING':
            return { ...state, loading: action.loading }
        case 'SET_SELECTED':
            return { ...state, selected: action.selected }
        case 'SET_ERROR':
            return { ...state, error: 'It looks like Tim should look into the paid version of OpenAI...' }
        default: 
            return state
        }
    }, {
        visible: false,
        error: '',
        selected: 'detailed',
        loading: false
    })

    return [state, dispatch]
}

export default useProjectState