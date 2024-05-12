
const Footer = () => {
    
    const handleClick = (e , username) =>{
        alert(username)
    }
    
    return (
        <>
            <h1>Footer Component</h1>
            <button onClick={(event) => handleClick(event , 'Ahmed')}>Click me 1</button>
            <button onClick={() => handleClick('Marina')}>Click me 2</button>

            {/* <button onClick={handleClick}>Click me</button> */}

        </>
    )
}

export default Footer;