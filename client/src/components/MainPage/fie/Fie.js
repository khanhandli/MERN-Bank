import React from 'react'
import Price from '../Price/Price'

function Fie() {
    return (
        <>
            <div className="fie" id='hoso'>
                <div className="fie--title">
                    <span>ĐIỀU KIỆN & THỦ TỤC</span>
                </div>
                <div className="fie--content1">
                    <h3>Điều kiện vay tín chấp</h3>
                    <ol>
                        <li>Khách hàng đi làm công ty hưởng lương, làm trong các công ty tư nhân, cơ quan nhà nước, doanh nghiệp nước ngoài</li>
                        <li>Tổng thu nhập từ 4 triệu trở lên (lương chuyển khoản hoặc tiền mặt)</li>
                        <li>Độ tuổi: 21- 58 tuổi</li>
                        <li>Không có NỢ XẤU tại bất kỳ tổ chức tín dụng nào</li>
                    </ol>
                </div>
                <div className="fie--content2">
                    <h3>Hồ sơ chuẩn bị</h3>
                    <div className="fie--content2__flex">
                        <div className="fie--content2__left">
                            <span>CMND/CCCD còn hiệu lực</span>
                            <span>Sổ hộ khẩu thường trú</span>
                        </div>
                        <div className="fie--content2__right">
                            <span>Sao kê tài khoản nhận lương 3 tháng gần nhất</span>
                            <span>Không cần giấy tạm trú. Linh động xử lý hồ sơ trong trường hợp thiếu giấy tờ</span>
                        </div>
                    </div>
                </div>
                <Price />

            </div>
        </>
    )
}

export default Fie
