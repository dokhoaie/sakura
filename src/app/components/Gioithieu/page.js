'use client';

import { useEffect } from 'react';
import styles from './Gioithieu.module.css';

export default function Home() {
    const traSua = {
        tenThuongHieu: "Trà Sữa Mộng Mơ",
        diaChi: "123 Đường Hạnh Phúc, Quận 1, TP.HCM",
        sanPhamNoiBat: ["Trà sữa truyền thống", "Trà sữa matcha", "Trà sữa trân châu đường đen"],
    };

    useEffect(() => {
        const btn = document.getElementById("datHangBtn");
        if (btn) {
            btn.addEventListener("click", () => {
                alert("Cảm ơn bạn đã đặt hàng! 🍹 Chúng tôi sẽ liên hệ ngay!");
                btn.style.transform = "scale(1.1)";
                setTimeout(() => {
                    btn.style.transform = "scale(1)";
                }, 200);
            });
        }
    }, []);

    return (
        <div className="container" style={{ padding: '20px' }}>
            <h1 id="tenThuongHieu">🍹 {traSua.tenThuongHieu}</h1>
            <p id="diaChi">📍 {traSua.diaChi}</p>

            <h3>Sản phẩm nổi bật:</h3>
            <ul id="sanPhamNoiBat">
                {traSua.sanPhamNoiBat.map((sp, index) => (
                    <li key={index}>{sp}</li>
                ))}
            </ul>

            <p id="camKet">❤️ Trà Sữa Mộng Mơ cam kết mang đến hương vị ngọt ngào và tươi mới mỗi ngày!</p>

            <button
                id="datHangBtn"
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    backgroundColor: "#e91e63",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                }}
            >
                🛒 Đặt Hàng Ngay
            </button>
        </div>
    );
}
    