import React, { useState } from "react";
import { Input, Col, Row, Divider, Card, Button } from "antd";
import { addProjApi } from "../net/netProj";

// http://127.0.0.1:8000/api/projs/createProj/?data={"projname": "海飞丝","projprice":"212","projintroduce":"2012012"}
export let AddProjPanel = () => {
  let [projname, setprojname] = useState("");
  let [projprice, setprojprice] = useState("");
  let [projintroduce, setprojintroduce] = useState("");
  let inputList = [
    {
      id: "projname",
      addonBefore: "项目名称",
      tips: "项目的唯一名称 (必填且唯一)",
    },
    { id: "projprice", addonBefore: "价格", tips: "价格 (￥)" },
    {
      id: "projintroduce",
      addonBefore: "介绍",
      tips: "简要的项目介绍 (选填，可不填)",
    },
  ];

  interface inputAttr {
    id: string;
    addonBefore: string;
    tips: string;
  }

  let InputList = (inputInfoList: Array<inputAttr>) => {
    let InputList = inputInfoList.map((x: inputAttr, index: number) => {
      return (
        <Input
          key={x.id}
          className="inputCol"
          addonBefore={x.addonBefore}
          value={eval(x.id)}
          onChange={(e) => {
            eval("set" + x.id)(e.target.value);
          }}
          placeholder={x.tips}
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
  };

  // http://127.0.0.1:8000/api/projs/createProj/?data={"projname": "海飞丝","projprice":"212","projintroduce":"2012012"}
  return (
    <Row align="middle" gutter={20} justify="center">
      <Col span={8}>
        <Card>
          {InputList(inputList)}
          <Button
            type={"primary"}
            onClick={() => {
              let queryObj = {
                projname: projname,
                projprice: projprice,
                projintroduce: projintroduce,
              };
              addProjApi(queryObj);
            }}
          >
            新建项目
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
