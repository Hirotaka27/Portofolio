import React, { useEffect, useState, useCallback } from 'react';
import { FaCalendarAlt, FaUserEdit, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './AdsenseArticle.css';

// Fungsi Pemicu AdSense yang Aman
const pushAdsense = (clickCount: number) => {
    // Memastikan window.adsbygoogle ada dan memiliki method push
    if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
        window.adsbygoogle.push({});
        console.log(`AdSense push triggered. Total clicks: ${clickCount}`);
    } else {
        console.warn("AdSense script not loaded.");
    }
};

// Komponen Navbar Terpisah
const ArticleNavbar: React.FC = () => (
    <nav className="article-navbar">
        <div className="navbar-logo">
            <a href="/">Daily Headline News</a>
        </div>
        <ul className="navbar-links">
            <li><a href="#"><FaHome /> Home</a></li>
            <li><a href="#"><FaInfoCircle /> About</a></li>
            <li><a href="#"><FaEnvelope /> Contact</a></li>
        </ul>
    </nav>
);

// Definisi komponen artikel
const AdsenseArticle: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);

    // Memastikan pushAdsense menggunakan fungsi terbaru
    const handleGlobalClick = useCallback(() => {
        setClickCount(prevCount => {
            // Batasi push AdSense agar tidak berlebihan (misal, maks 10 kali)
            const newCount = prevCount + 1;
            if (newCount <= 10) { 
                pushAdsense(newCount);
            }
            return newCount;
        });
    }, []);

    // Efek untuk memuat iklan saat komponen mount dan setiap kali ada klik
    useEffect(() => {
        document.title = "Skyline Residences with Sunset Horizon Pools";
        
        // Pemuatan Awal
        pushAdsense(0); // Panggil sekali saat mount

        // Setup Listener untuk Klik Global
        document.body.addEventListener('click', handleGlobalClick);

        // Cleanup: Hapus listener saat komponen dilepas
        return () => {
            document.body.removeEventListener('click', handleGlobalClick);
        };
    }, [handleGlobalClick]); 

    return (
        <div className="article-page-wrapper">
            
            <ArticleNavbar />

            <main className="main-article-content">
                
                <h1 className="article-title">Skyline Residences with Sunset Horizon Pools</h1>
                
                <div className="article-meta">
                    <span className="author"><FaUserEdit /> By Admin Blogger</span> 
                    <span className="date"><FaCalendarAlt /> Published: September 08, 2025</span>
                </div>

                {/* START ADS SLOT 1: Di bawah Judul/Meta */}
                <div className="ads-slot ads-header">
                    <p>[Slot Iklan Display Responsif 728x90]</p>
                </div>
                {/* END ADS SLOT 1 */}
                
                <p className="lead-paragraph">
                    Located in the heart of the city, **Skyline Residences** introduces a new standard of luxury living. With its unique **Sunset Horizon Pools**, it promises an unparalleled experience, merging architectural genius with breathtaking natural beauty. Para pakar properti memprediksi ini akan menjadi hunian paling dicari di Asia Tenggara pada tahun 2026.
                </p>
                
                <figure>
                    <img 
                        src="https://via.placeholder.com/900x500?text=Skyline+Sunset+Horizon+Pools" 
                        alt="Skyline Residences Pool View"
                    />
                    <figcaption>The stunning infinity pool overlooking the city skyline at sunset.</figcaption>
                </figure>

                {/* --- Konten Diperbanyak --- */}

                <h2 className="section-title">Inovasi Arsitektur: Perpaduan Kota dan Cakrawala</h2>
                
                <p>
                    Proyek ini dirancang oleh firma arsitektur ternama, **Alpha Design**. Visi mereka ambisius: menciptakan ruang di mana penghuni merasakan koneksi dengan langit dan hiruk pikuk kota di bawah. Penggunaan desain minimalis dan dinding kaca yang luas memastikan pemandangan selalu menjadi pusat perhatian, menawarkan estetika kemewahan yang tenang.
                </p>
                
                <h2 className="section-title">Kehidupan Eksklusif: Fasilitas Bintang Lima</h2>
                
                <p>
                    Setiap unit hunian menawarkan jendela dari lantai ke langit-langit serta balkon besar, memaksimalkan cahaya alami dan menawarkan pemandangan 270 derajat. Selain kolam renang tak bertepi, fasilitas yang tersedia mencakup:
                </p>
                
                <ul>
                    <li>**Sky Lounge & Bar:** Area santai eksklusif di lantai teratas.</li>
                    <li>**Private Cinema:** Bioskop pribadi berkapasitas 20 orang.</li>
                    <li>**Smart Home System:** Setiap unit dilengkapi dengan teknologi rumah pintar terkini.</li>
                    <li>**24/7 Butler Service:** Layanan pelayan pribadi sepanjang waktu.</li>
                </ul>
                
                {/* START ADS SLOT 2: Iklan Paragraf/In-article */}
                <div className="ads-slot ads-in-article">
                    <p>[Slot Iklan In-Article 300x250]</p>
                </div>
                {/* END ADS SLOT 2 */}
                
                <h2 className="section-title">Dampak Pasar dan Potensi Investasi Jangka Panjang</h2>

                <p>
                    Lebih dari sekadar daya tarik estetika, Skyline Residences adalah investasi utama. Jumlah unit yang terbatas dan lokasi strategis di distrik ekonomi yang sedang berkembang menjamin tingkat apresiasi properti yang tinggi dan hasil sewa yang kuat. Permintaan terhadap properti mewah di kawasan ini terus meningkat tajam.
                </p>
                
                <h3 className="sub-section-title">Analisis Harga Properti</h3>
                <p>
                    Menurut laporan dari Global Property Insights, harga per meter persegi di area ini telah meningkat sebesar 15% dalam dua tahun terakhir. Skyline Residences diperkirakan akan melampaui rata-rata ini karena faktor eksklusivitas dan fasilitas unik yang ditawarkan.
                </p>
                
                {/* START ADS SLOT 3: Iklan Banner Tengah (Paling Cuan) */}
                <div className="ads-slot ads-middle-banner">
                    <p>[Slot Iklan Banner Besar 336x280]</p>
                </div>
                {/* END ADS SLOT 3 */}

                <h2 className="section-title">Jangan Sampai Ketinggalan Peluncuran Eksklusif!</h2>

                <p>
                    Jangan lewatkan kesempatan untuk mengamankan tempat Anda di komunitas eksklusif ini. Klik tautan di bawah ini untuk mendapatkan brosur resmi dan rincian harga sebelum tanggal peluncuran publik. Kami hanya menyediakan slot terbatas untuk tur privat.
                </p>

                <div className="call-to-action-article">
                    <a href="https://link-ke-penawaran-anda.com" className="cta-article-btn">
                        Download Pricing & Brochure Now!
                    </a>
                </div>
                
                {/* START ADS SLOT 4: Iklan Penutup Artikel (Native atau Display) */}
                <div className="ads-slot ads-footer">
                    <p>[Slot Iklan Native atau Display Penutup]</p>
                </div>
                {/* END ADS SLOT 4 */}
                
            </main>

            <footer className="article-site-footer">
                <p>Total Clicks Triggered Adsense: {clickCount}</p>
                <p>&copy; 2025 Daily Headline News. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdsenseArticle;