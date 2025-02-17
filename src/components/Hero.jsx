import ustazukiFoto from '../assets/Group 15.png'

function Hero(){
    return(
        <>
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="content-left col-sm-12 col-md-12 col-lg-6">
                            <h2>Menggapai Kesempurnaan Hati dengan <span>Akhlak</span> dan <span>Tasawuf</span></h2>
                            <p>Tasawuf dan akhlak adalah jalan menuju hati yang indah. Pelajari lebih dalam bersama Ustaz Uki untuk menemukan ketenangan dan kebijaksanaan dalam hidup. Ikuti kajiannya di sosial media dan perkuat perjalanan spiritual Anda.</p>
                            <button>
                                <p>Lihat Selengkapnya!</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="content-right col-sm-12 col-md-12 col-lg-6">
                            <img src={ustazukiFoto} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;