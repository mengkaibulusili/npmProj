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

interface vipProps {
  telephone: string;
  vipName: string;
  birthDay: string;
  money: string;
  staff: string;
}

export let AddVip = () => {
  let [telephone, settelephone] = useState("1");
  let [vipName, setvipName] = useState("2");
  let [money, setmoney] = useState("4");
  let [staff, setstaff] = useState("5");
  let [birthDay, setbirthDay] = useState(moment("1990-6-1"));
  let [rechargetype, setrecharge] = useState("sp");
  // let telephone = "1";
  // let vipName = "22";
  // let birthDay = "3312";
  // let money = "";
  // let staff = "";

  const inputList = [
    { id: "vipName", addonBefore: "姓名" },
    { id: "telephone", addonBefore: "电话" },
    { id: "staff", addonBefore: "办理人" },
    { id: "money", addonBefore: "充值金额" },
  ];

  interface inputAttr {
    id: string;
    addonBefore: string;
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
            <Tag color="blue">充值类型</Tag>
            <Radio.Group
              onChange={(e) => {
                setrecharge(e.target.value);
              }}
              value={rechargetype}
              size={"large"}
            >
              <Radio value={"sp"}>商品卡</Radio>
              <Radio value={"hl"}>护理卡</Radio>
            </Radio.Group>
          </Row>
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
                alert(telephone);
                alert(birthDay);
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
