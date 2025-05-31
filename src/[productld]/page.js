// app/chitietsanpham/page.tsx

import { HtmlContext } from "next/dist/shared/lib/html-context.shared-runtime";
import { SimpleSlider } from "../components/react-slick/reactSlick";

import style from "./page.module.css";
import Image from "next/image"; // Đúng path phải là từ "next/image"

export default function ChiTietSanPham() {
  return (
    <div className={style.content}>
      <div className={style.noidungchinh}>
        <div className={style.trinhbay}>
          <div className={style.hinhanhsanpham}>
            <SimpleSlider />
          </div>
        </div>

        <div className={style.khungPhai}>
          <div className={style.tensanpham}>
            <h1>Trà sữa này có thể tặng kèm</h1>
          </div>

          <div className={style.options}>
            <button className={style.optionBlue}>
              TRẢ GÓP 0%<br />
              <small>
                Trả trước chỉ từ 300.000VND (nếu mua từ 2 trở lên thì được
                khuyến mãi nha )
              </small>
            </button>

            <button className={style.optionOrange}>
              Nhận lại trả trước<br />
              <small>Chỉ từ 20.000~145.000đ</small>
            </button>
          </div>

          <div className={style.gacha}>
            <strong>Mình sẽ tạo cơ hội cho mọi người nha</strong>
          </div>

          <div className={style.nutmua}>
            <button className={style.nutmua2}>MUA Đi</button>
          </div>
        </div>
      </div>

      <div className={style.noidungphu}>
        <div className={style.sanphamgoiy}></div>
      </div>

      <div className={style.mota}>
        <div
          dangerouslySetInnerHTML={{ __html: HtmlContext }}
        ></div>
      </div>
    </div>
  );
}
