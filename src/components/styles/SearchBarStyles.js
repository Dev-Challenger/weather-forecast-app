const SearchBarStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '2rem',
        border: '2px solid #ccc',
        boxShadow: state.isFocused ? '0 0 0 2px #222' : null,
        background: state.isFocused ? '#ccc' : null,
        color: '#333',
        width: '18rem',
        height: '3rem',
        padding: '5px',
        margin: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        outline: 'none',
        backgroundColor: '#aaa',

    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#333' : null,
        color: state.isFocused ? 'white' : null,
        background: state.isFocused ? '#666' : null,
        borderRadius: '2.2rem',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: state.isFocused ? 'white' : null,
        alignSelf: 'center',
        justifyContent: 'center'
    }),
    menu: (provided, state) => ({
        ...provided,
        color: state.isFocused ? 'white' : null,
        background: '#aaa',
        borderRadius: '2rem'
    }),
    input: (provided, state) => ({
        ...provided,
        alignSelf: 'center',
        margin: '0 1rem'
    })


}

export default SearchBarStyles;