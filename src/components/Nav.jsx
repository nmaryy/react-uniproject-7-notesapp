import './Nav.css'
const Nav = () => {
    let ds = 'icon'
    function brgHandler() {
        console.log('brgd')
    }
    return (
        <div className='nav'>
            <div className='nav--search'>
                <input type='text' placeholder={`${ds} Search here`} />
            </div>
            <div className='nav--icons'>
                <div className='nav--mode'>
                    <div className='nav--mode--check'>

                        <input type='checkbox' />
                    </div>
                </div>
                <div className='nav--brg' onMouseEnter={brgHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Nav