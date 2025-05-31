import styles from './footer.module.css';
export  function Footer() {
    return (
        <footer className={styles.footer}>
        <section className={styles.footerSection}>
          <div>
            <h5>Tổng Đài Hỗ Trợ</h5>
            <ul>
              <li>Gọi mua: 1900 232 431 (7:00 - 22:30)</li>
              <li>Khiếu nại: 1800.1081 (7:00 - 22:30)</li>
              <li>Gọi mua: 1900 233 491 (7:00 - 22:30)</li>
            </ul>
          </div>
          <div>
            <h5>Về Công Ty</h5>
            <ul>
              <li>Giới thiệu công ty (MWG.vn)</li>
              <li>Tuyển dụng</li>
              <li>Gửi góp ý, khiếu nại</li>
              <li>Tìm siêu thị (300 shop)</li>
            </ul>
          </div>
          <div>
            <h5>Thông Tin Khác</h5>
            <ul>
              <li>Tích điểm Quà tặng</li>
              <li>Lịch sử mua hàng</li>
              <li>Đăng ký bán hàng CTV chiết khấu cao</li>
              <li>Tìm hiểu về mua trả chậm</li>
              <li>Xem thêm v</li>
            </ul>
          </div>
          <div>Website cùng tui</div>
        </section>
        <div className={styles.copyright}>
        © 2018. Tiệm trà sữa. GPDKKD: [Số GPKD] do sở KH & ĐT [Tỉnh/Thành phố] cấp ngày [Ngày cấp]. GPMXH: [Số GPMXH] do Bộ Thông Tin và Truyền Thông cấp ngày [Ngày cấp].

Điện thoại: [Số điện thoại]. Email: CTL@[tên miền].com. Chịu trách nhiệm nội dung: Cao Thị Thùy Ly. Email: hotro@[tên miền].com. Xem chính sách sử dụng. 
        </div>
        <div className={styles.mota}>
          </div>
       </footer>
    );
  }