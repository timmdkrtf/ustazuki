import ss1 from '../assets/Screenshot3.png'
import ss2 from '../assets/Screenshot2.png'

function Highlight(){
    return(
        <>
            <div className="highlight">
                <div className="container">
                    <div className="row">
                        <div className="content-left">
                            <h3>Hadir di Platform Instagram</h3>
                            <img src={ss1} alt="" />
                            <div className="flex-poin">
                                <div className="poin followers">
                                    <b>+16K</b>
                                    <p>Followers</p>
                                </div>
                                <div className="poin views">
                                    <b>+250K</b>
                                    <p>Views</p>
                                </div>
                                <div className="poin likes">
                                    <b>+30K</b>
                                    <p>Likes</p>
                                </div>
                            </div>
                            <img src={ss2} alt="" />
                            <a href="https://www.instagram.com/ustazuki/" target="_blank">See more on Instagram</a>
                        </div>
                        <div className="content-right">
                            <h3>Top 6 Views on Youtube</h3>
                            <div className="list-video">
                                <div className="video">
                                    <h4>01.</h4>
                                    <iframe width="120" height="70" src="https://www.youtube.com/embed/0YOaUgj9Mqo?si=Bzghz5Xdi6SJIZtO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <p>Pernah Lupa Rakaat atau Lupa Gerakan Saat Sholat? Berikut Penjelasannya! | Sujud Sahwi - Ustaz Uki</p>
                                </div>
                                <div className="video">
                                    <h4>02.</h4>
                                    <iframe width="120" height="70" src="https://www.youtube.com/embed/ygLgP0oYQhM?si=wRjtQSheMGO4EE29" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <p>Hilang Arah? Temukan Tujuan Hidupmu! | Podcast Perjalanan Hati: Episode Pertama - Ustaz Uki</p>
                                </div>
                                <div className="video">
                                    <h4>03.</h4>
                                    <iframe width="120" height="70" src="https://www.youtube.com/embed/9Al3gNQQCGI?si=R5oGLmolKQK3CbcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <p>Ikuti Cara Ini, Agar Hidupmu Lebih Positive! | Etika Pertemanan - Ustaz Uki</p>
                                </div>
                                <div className="video">
                                    <h4>04.</h4>
                                    <iframe width="120" height="70" src="https://www.youtube.com/embed/DVA418zsap8?si=gMS27GG5iNwNeOgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <p>Menelusuri Jejak Leluhur Nabi: Garis Keturunan yang Diberkahi | Silsilah Nabi SAW - Ustaz Uki</p>
                                </div>
                                <div className="video">
                                    <h4>05.</h4>
                                    <iframe width="120" height="70" src="https://www.youtube.com/embed/1yDAd0xUJNk?si=1d9nB53P3IrD60W9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <p>Wah, Ternyata Tanpa Mereka Kita Bukan Siapa-Siapa | Makna ‘Surga di Telapak Kaki Ibu’ - Ustaz Uki</p>
                                </div>
                                <div className="video">
                                    <h4>06.</h4>
                                    <iframe width="120" height="70" src="https://www.youtube.com/embed/nd4zWwKsEFc?si=1gTCddKqu0hGDPPX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <p>“Untuk Apa, Sih, Kita Ada di Dunia Ini? | Mendalami Makna Kata ‘Ikhlas’ – Ustaz Uki</p>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/@ustazuki" target="_blank">See more on Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Highlight;