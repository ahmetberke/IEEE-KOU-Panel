import React from "react";
import './index.scss';

function TotalMembersCount(){

    const values = [{title: "Komite Üye Sayısı", value: 82}, {title: "Toplam Üye Sayısı", value: 321}]
    const valueContent = values.map((v) => (
        <div className="group">
            <div className="title">{v.title}</div>
            <div className="value">{v.value}</div>
        </div>
    ));

    return (
        <div className="TotalMembersCount impBox">
            {valueContent}
        </div>
    );
}

export default TotalMembersCount;