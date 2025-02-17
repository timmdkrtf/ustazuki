import UstazUkiLogo from '../assets/29-removebg-preview.png'

function NavigationBar(){
    return(
        <>
            <nav className="navbar bg-body-light shadow-sm py-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={UstazUkiLogo} alt="" />
                        <p>Ustaz Uki</p>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;