import React from 'react'
import price from './bang-ls-mp-20210516042724.png'

function Price() {
    return (
        <div className="price">
            <h2>BẢNG TÍNH LÃI SUẤT THAM KHẢO</h2>
            <div className="price--img">
                <img src={price} alt="price" />
            </div>
            <div className="price--warning">
                <div className="price--warning__img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1792 1896.0833" className="" fill="rgba(232, 58, 48, 1)"> <path d="M1024 1375v-190q0-14-9.5-23.5T992 1152H800q-13 0-22.5 9.5T768 1185v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11H786q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17H128q-34 0-63.5-17T18 1601q-37-63-2-126L784 67q17-31 47-49t65-18 65 18 47 49z"></path> </svg>
                </div>
                <span>LƯU Ý: Bảng tính lãi suất chỉ mang tính chất tham khảo, lãi suất cụ thể sẽ phụ thuộc vào hình thức vay, mức lương và hình thức nhận lương của khách hàng.</span>
            </div>
            <div className="price--policy">
                <h2>CHÍNH SÁCH CHO VAY - QUÝ KHÁCH LƯU Ý</h2>
                <ul>
                    <li>Tùy Nhu Cầu mà các khoản vay thời gian vay tối thiểu là 12 tháng ( 365 ngày ) và tối đa 60 tháng ( 1800 ngày)</li>
                    <li>Tùy vào nhu cầu lãi suất tối thiểu 5.7%/1năm – lãi suất tối đa 10.3%/1 năm</li>
                    <li>Các khoản vay dài hạn sẽ được hỗ trợ ưu đãi. Ví dụ: Nguyên Văn A vay 30 triệu trong 12 tháng và trả góp mỗi tháng gốc + lãi là 2.750.000 vậy sau 12 tháng tổng lãi + gốc là 33 triệu suy ra số tiền lãi là 3 triệu vậy lãi suất: 10%/năm - đây là tạm tính còn thực tế là lãi suất tính trên dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn nợ ít.</li>
                    <li>Nhưng nếu Nguyễn Văn A vạy 30 triệu trả trong vòng 60 tháng thì mỗi tháng sẽ phải trả góp 762.000đ vậy tổng sau 60 tháng cả gốc và lãi là : 45.720.000 trừ đi gốc tiền lãi là 15.720.000 trong 5 năm thì mỗi năm lãi là 3.144.000 sấp sỉ 10%/năm. đây là tạm tính còn thực tế là lãi suất tính trên dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn nợ ít.</li>
                    <li>Khách vay số tiền càng lớn lãi suất càng thấp.</li>
                </ul>
            </div>
        </div>
    )
}

export default Price
