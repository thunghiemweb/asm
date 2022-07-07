import React, { Component } from 'react';
import {
    Card, CardBody, CardText,
    CardTitle
} from 'reactstrap';


import dateFormat from "dateformat";


class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedNV: null
        }
    }

    renderChonNV(dish) {
        this.setState({ selectedNV: dish });
    }

    renderNV(nv) {
        if (nv != null)
            return (
                <Card>
                    <CardBody>
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

        const menu = this.props.dsnv.map((e) => {
            return (
                <div key={e.id} className="col-sx-12 col-sm-6 col-md-4">
                    <Card onClick={() => this.renderChonNV(e)}>
                        <CardTitle>{e.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row">
                    <div className="col-sx-12 col-sm-12 col-md-12">
                        {this.renderNV(this.state.selectedNV)}
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffList;