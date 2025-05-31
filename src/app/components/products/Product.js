import Link from "next/link";
import Image from "next/image";
import styles from "./Product.module.css";

export function Product() {
    return(
        <div className={styles.container2}>
        <div className={styles.itemA}>
          <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanh}><Image src="/hinh2.jpg" alt="my logo" width={165} height={200} style={{ borderRadius: '25px' }} />
              </div>
          <div className={styles.productquangcao}><strong>trà sữa socola </strong></div>
          <strong className={styles.productgiaca}>15.000VND</strong>
          
          <div className={styles.productconlai}>
          <div className={styles.remain}>Còn lại 1/1</div>
          </div>
          </div>
          <div className={styles.subproduct}>
            <button className={styles.nutmua}>
            <Link href="/chitietsanpham">MUA Đi!</Link>
             </button>
          </div>
          </div>
          <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanh}><Image src="/hinh3.webp" alt="my logo" width={165} height={200} />
              </div>
          <div className={styles.productquangcao}><strong>trà sữa socola </strong></div>
          <strong className={styles.productgiaca}>20.000VND</strong>
          
          <div className={styles.productconlai}>
            <div className={styles.remain}>Còn lại 1/1</div></div>
          </div>
          <div className={styles.subproduct}>
            <button className={styles.nutmua}><Link href="/chitietsanpham">MUA Đi!</Link></button>
          </div>
          </div>
          <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanh}><Image src="/hinh4.jpg" alt="my logo" width={165} height={200} />
              </div>
          <div className={styles.productquangcao}><strong>trà sữa thập cẩm </strong></div>
          <strong className={styles.productgiaca}>25.000VND</strong>
          
          <div className={styles.productconlai}>
          <div className={styles.remain}>Còn lại 1/1</div>
          </div>
          </div>
          <div className={styles.subproduct}>
            <button className={styles.nutmua}><Link href="/chitietsanpham">MUA Đi!</Link></button>
          </div>
          </div>
          <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanh}><Image src="/hinh5.webp" alt="my logo" width={165} height={200} />
              </div>
          <div className={styles.productquangcao}><strong>trà sữa china</strong></div>
          <strong className={styles.productgiaca}>23.000VND</strong>
          
          <div className={styles.productconlai}>
          <div className={styles.remain}>Còn lại 1/1</div>
          </div>
          </div>
          <div className={styles.subproduct}>
            <button className={styles.nutmua}><Link href="/chitietsanpham">MUA Đi!</Link></button>
          </div>
          </div>
          <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanh}><Image src="/hinh6.jpg" alt="my logo" width={165} height={200} />
              </div>
          <div className={styles.productquangcao}><strong>trà sữa trân châu trắng</strong></div>
          <strong className={styles.productgiaca}>15.000VND</strong>
          
          <div className={styles.productconlai}>
          <div className={styles.remain}>Còn lại 1/1</div>
          </div>
          </div>
          <div className={styles.subproduct}>
            <button className={styles.nutmua}><Link href="/chitietsanpham">MUA Đi!</Link></button>
          </div>
          </div>
          <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanh}><Image src="/hinh7.jpg" alt="my logo" width={165} height={200} />
              </div>
          <div className={styles.productquangcao}><strong>trà sữa đường đen</strong></div>
          <strong className={styles.productgiaca}>28.000VND</strong>
          
          <div className={styles.productconlai}>
          <div className={styles.remain}>Còn lại 1/1</div>
          </div>
          </div>
          <div className={styles.subproduct}>
            <button className={styles.nutmua}><Link href="/chitietsanpham">MUA Đi!</Link></button>
          </div>
          </div>
        </div> 

      </div>
    )
}