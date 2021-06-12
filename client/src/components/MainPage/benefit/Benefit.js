import React from 'react'
import benefit from './vay-the-chap-shinhan-bank-3-20210516031642.jpg'
import Fie from '../fie/Fie'
import { Link } from 'react-scroll';
import Register from '../Register/Register';
import Footers from '../footer/Footers'

var Scroll = require('react-scroll');

function Benefit() {

    var scroll = Scroll.animateScroll;

    scroll.scrollToTop();


    return (
        <>
             <Link to='top' spy={true} smooth={true} offset={50} duration={500} className="scroll-top">^</Link>
            <div className="benefit">
                <div className="benefit--left">
                    <h1>NGÂN HÀNG CHO VAY TÍN CHẤP LÃI SUẤT THẤP</h1>
                    <ul>
                        <li>Khoản vay lên đến 12 lần thu nhập hàng tháng và tối đa 500 triệu đồng</li>
                        <li>Lãi suất chỉ từ 0,69%/tháng tính trên dư nợ giảm dần</li>
                        <li>Thời hạn vay từ tối thiểu 12 tháng đến tối đa 60 tháng</li>
                        <li>Không thu phí hồ sơ</li>
                        <li>Bảo mật thông tin 100% cho Khách hàng</li>
                        <li>Thủ tục đơn giản, nhanh chóng</li>
                        <li>Giải ngân trong vòng 24 giờ sau khi hồ sơ được duyệt</li>
                        <li>Ví dụ: Với khoản vay tín dụng 60 triệu đồng, thời hạn vay 12 tháng, lãi suất 0,69 (18%/năm), hằng tháng bạn chỉ phải thanh toán 5.500.800 đồng.</li>
                    </ul>
                </div>
                <div className="benefit--right">
                    <div className="benefit--right__img">
                        <img src={benefit} alt="logo" />
                    </div>
                </div>
            </div>
            <Fie />
            <Register />
            <Footers />
        </>
    )
}

export default Benefit
