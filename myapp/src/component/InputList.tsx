import React from "react";
import { Input, Col, Row, Divider } from "antd";

interface inputAttr {
  id: string;
  addonBefore: string;
  tips: string;
}

export function InputList(inputInfoList: Array<inputAttr>) {
  let InputList = inputInfoList.map((x: inputAttr, index: number) => {
    return (
      <Input
        key={x.id}
        className="inputCol"
        addonBefore={x.addonBefore}
        value={eval(x.id)}
        onChange={(e) => {
          eval("set" + x.id)(e.target.value);
          console.log(x.id, eval(x.id));
        }}
        placeholder={x.tips}
        maxLength={11}
        size={"large"}
      ></Input>
    );
  });

  return (
    <Row>
      <Col>
        <Divider />
        {InputList}
        <Divider />
      </Col>
    </Row>
  );
}
