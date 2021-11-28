import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Ribua from '../components/Ribua'
import Round from '../components/Round'
import { FcLike,FcBinoculars,FcTwoSmartphones } from "react-icons/fc";


export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Row>
                    <Col xl={4} md={6} sm={12} xs={12}>
                <Ribua maxWidth="340px" height="fitContent" text={<> <Round icon={<FcBinoculars></FcBinoculars>} background={"lightGreen"}></Round>  `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

`</>}></Ribua>
</Col>
<Col xl={4} md={6} sm={12} xs={12}>

                <Ribua maxWidth="340px" height="fitContent" text={<><Round icon={<FcTwoSmartphones></FcTwoSmartphones>} background={"pink"}></Round> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

`</>}>
    
</Ribua>
</Col>

                    <Col xl={4}  md={6}sm={12} xs={12}>

                <Ribua maxWidth="340px" height="fitContent" text={<><Round icon={<FcLike></FcLike>} background={"LIghtBlue"}></Round>` Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

`</>}></Ribua>
</Col>

</Row>            </div>
        )
    }
}
