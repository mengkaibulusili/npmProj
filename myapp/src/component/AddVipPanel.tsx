import React, { useState } from "react";
import {
  Row,
  Col,
  Input,
  Card,
  Button,
  Divider,
  DatePicker,
  Tag,
  Radio,
} from "antd";
import { genUUID } from "./globalFunction";
import moment from "moment";
import { addVipApi } from "../net/netVip";

interface vipProps {
  telephone: string;
  vipName: string;
  birthDay: string;
  money: string;
  staff: string;
}

export let AddVipPanel = () => {
  let [telephone, settelephone] = useState("");
  let [vipName, setvipName] = useState("");
  let [staff, setstaff] = useState("");
  let [birthDay, setbirthDay] = useState(moment("1990-6-1"));

  const inputList = [
    { id: "vipName", addonBefore: "姓名", tips: "真实姓名" },
    { id: "telephone", addonBefore: "电话", tips: "11位有效电话地址" },
    { id: "staff", addonBefore: "办理人", tips: "员工名称" },
    // { id: "money", addonBefore: "充值金额" },
  ];

  interface inputAttr {
    id: string;
    addonBefore: string;
    tips: string;
  }

  let inputShow = inputList.map((x: inputAttr, index: number) => {
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
    <Row align="middle" gutter={20} justify="center">
      <Col span={8}>
        <Card title={"创建新会员"}>
          {inputShow}
          <Divider />
          <Row>
            <Tag color="green"> 选择生日啦 </Tag>
            <DatePicker
              size={"large"}
              inputReadOnly={true}
              format="YYYY 年 MM 月 DD 日 "
              onChange={(date: any, dateString: string) => {
                setbirthDay(date);
                console.log("time:", dateString);
              }}
              value={birthDay}
            />
          </Row>
          <Divider />
          <Col>
            <Button
              type={"primary"}
              onClick={() => {
                let queryObj = {
                  name: vipName,
                  telephone: telephone,
                  birthday: birthDay,
                  staffid: "1",
                  staff: staff,
                };
                addVipApi(queryObj);
              }}
            >
              提交
            </Button>
          </Col>
        </Card>
      </Col>
    </Row>
  );
};
