import WhatsappLogo from '../assets/WhatsApp.png'
import TiktokLogo from '../assets/tiktok.webp'
import FacebookLogo from '../assets/facebook-logo.png'

function Contact(){
    return(
        <>
            <div className="contact">
                <div className="container">
                    <h4>Tersedia di <span>Platform</span> Lainnya</h4>
                    <div className="list-contact">
                        <a href="https://www.tiktok.com/@ustazuki" target="_blank">
                            <img src={TiktokLogo} alt="" />
                            <p>Tiktok</p>
                        </a>
                        <a href="https://www.facebook.com/people/Ustaz-Uki/61554607349017/" target="_blank">
                            <img src={FacebookLogo} alt="" />
                            <p>Facebook</p>
                        </a>
                        <a href="https://whatsapp.com/channel/0029VapEYw87z4kYC3yD2q3l" target="_blank">
                            <img src={WhatsappLogo} alt="" />
                            <p>Whatsapp</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;