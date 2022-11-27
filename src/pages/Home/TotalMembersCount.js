import React from "react";
import './index.scss';

function TotalMembersCount(){

    const values = [{title: "Komite Üye Sayısı", value: 82}, {title: "Toplam Üye Sayısı", value: 321}]
    const valueContent = values.map((v) => (
        <div className="group">
            <div className="title">{v.title}</div>
            <div className="value">{v.value} Kişi</div>
        </div>
    ));

    return (
        <div className="TotalMembersCount impBox">
            <div className="ValueBox">
                {valueContent}
            </div>
            <div className="details">
                <div className="profiles">
                    <div className="photoGroup">
                        <div className="photo">
                            <img src="images/person_1.webp" alt="person_1"/>
                        </div>
                        <div className="photo">
                            <img src="images/person_2.png" alt="person_2"/>
                        </div>
                        <div className="photo">
                            80+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalMembersCount;