import PropTypes from 'prop-types'
export function Button({text, name = '?'}){
    
    console.log(text)

    if (!text) {
        console.error("El texto es requerido.")
    }
    return <button onClick={function() {console.log('Hello world')}}>
        {text}
    </button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}