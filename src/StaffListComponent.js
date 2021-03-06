import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Navbar,
    NavbarBrand

} from 'reactstrap';
import './App.css';


import dateFormat from "dateformat";


class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedNV: null,
            cot: "col-12"
        }
    }

    renderChonNV(nv) {
        this.setState({ selectedNV: nv });
        //console.log('Chọn nhân viên');
    }

    thayDoiSoCot() {
        if (this.state.cot === "col-12") {
            this.setState({ cot: "col-6" });
        }
        else if (this.state.cot === "col-6") {
            this.setState({ cot: "col-4" });
        }
        else if (this.state.cot === "col-4") {
            this.setState({ cot: "col-2" });
        }
        else if (this.state.cot === "col-2") {
            this.setState({ cot: "col-12" });
        }

        console.log(this.state.cot);

        //console.log('Thay đổi số cột hiển thị');
    }

    renderNV(nv) {
        if (nv != null)
            return (
                <Card className="footer">
                    <CardBody >
                        <CardTitle>{nv.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(nv.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(nv.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {nv.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {nv.annualLeave} ngày</CardText>
                        <CardText>Số ngày đã đi làm thêm: {nv.overTime} ngày</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div>
                    <p>Bấm vào tên nhân viên để xem thông tin.</p>
                </div>
            );
    }

    render() {

        const Staff = this.props.dsnv.map((e) => {
            return (
                <div key={e.id} className={this.state.cot}>
                    <Card className="footer2"
                        onClick={() => this.renderChonNV(e)}>
                        <CardTitle>{e.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container" >
                <Navbar dark color="primary">
                    <div className='jumbotron2'>
                        <NavbarBrand>
                            Ứng dụng quản lý nhân sự v1.0
                        </NavbarBrand>
                        <button
                            type="button"
                            onClick={() => this.thayDoiSoCot()}>
                            Thay đổi số cột</button>
                    </div>
                </Navbar>

                <div className="row">
                    {Staff}
                </div>

                <div className="row-content">
                    <div className="col-12">
                        {this.renderNV(this.state.selectedNV)}
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffList;