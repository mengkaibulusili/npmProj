import { watch } from "fs";
import React, { useState, useEffect } from "react";
import { getAllProjApi } from "../net/netProj";
import {
  Row,
  Table,
  Col,
  Button,
  Popover,
  Input,
  InputNumber,
  Divider,
  Select,
  Modal,
} from "antd";
import { checkServerIdentity } from "tls";
import * as _ from "lodash";
import { genUUID } from "../component/globalFunction";
const { Option } = Select;

function ChengeContent(record: any) {
  const pn = _.get(record, "fields.projname", "空");
  const pp = _.get(record, "fields.projprice", "空");
  const st = _.get(record, "fields.state", "空");
  const pi = _.get(record, "fields.projintroduce", "空");
  let [projname, setprojname] = useState(pn);
  let [projprice, setprojprice] = useState(pp);
  let [state, setstate] = useState(st);
  let [projintroduce, setprojintroduce] = useState(pi);
  function handleChange(value: string) {
    setstate(value);
  }
  return (
    <Row key={"r2"} align="middle" gutter={20} justify="center">
      <Col key={"c2"}>
        <Input
          key={"i1"}
          style={{ width: "400px" }}
          addonBefore="项目名称"
          defaultValue={projname}
          size={"large"}
        ></Input>
        <Divider key={"d1"}></Divider>
        <Input
          key={"i2"}
          style={{ width: "400px" }}
          addonBefore="价格(￥)"
          defaultValue={projprice}
          size={"large"}
        ></Input>
        <Divider key={"d2"}></Divider>
        <Select
          key={"s1"}
          style={{ width: "400px" }}
          defaultValue={state}
          onChange={handleChange}
        >
          <Option key={"o1"} value="在售">
            在售
          </Option>
          <Option key={"o2"} value="下架">
            下架
          </Option>
        </Select>
      </Col>
    </Row>
  );
}

let ChengeButton = (text: any, record: any, index: number) => {
  let [visible, setvisible] = useState(false);
  let b = (
    <Row key={"r1"}>
      <Col key={"c1"}>
        <Button
          key={"b1"}
          type={"primary"}
          onClick={() => {
            setvisible(true);
            console.log("this ", record);
          }}
        >
          修改
        </Button>
        <Modal
          key={"m1"}
          visible={visible}
          destroyOnClose={true}
          onCancel={() => {
            setvisible(false);
          }}
        >
          {ChengeContent(record)}
        </Modal>
      </Col>
    </Row>
  );
  return b;
};

export function WatchProjPanel() {
  let [projdata, setprojdata] = useState([{ key: "1" }]);

  useEffect(() => {
    async function loadData() {
      let data: Array<any> = await getAllProjApi({});
      for (let index = 0; index < data.length; index++) {
        data[index]["key"] = String(data[index]["pk"]);
      }
      console.log("key", data);
      setprojdata(data);
    }
    loadData();
  }, []);

  // createtime: "20200815-10:08:33"
  // projintroduce: "2012012"
  // projname: "海飞丝"
  // projprice: "212"
  // state: "下架"
  const projColumns = [
    {
      title: "序号",
      dataIndex: "pk",
      key: "pk",
    },
    {
      title: "项目名称",
      dataIndex: ["fields", "projname"],
      key: "projname",
    },
    {
      title: "价格(￥)",
      dataIndex: ["fields", "projprice"],
      key: "projprice",
    },
    {
      title: "状态",
      dataIndex: ["fields", "state"],
      key: "state",
    },
    {
      title: "最后修改时间",
      dataIndex: ["fields", "createtime"],
      key: "createtime",
    },
    {
      title: "项目介绍",
      dataIndex: ["fields", "projintroduce"],
      key: "projintroduce",
    },
    {
      title: "上下架",
      key: "update",
      render: (text: any, record: any, index: number) => {
        return ChengeButton(text, record, index);
      },
    },
  ];

  return (
    <Row align="middle" gutter={20} justify="center">
      <Col>
        <Table
          rowKey={(record: any) => {
            return record.pk;
          }}
          // dataSource={[]}
          dataSource={projdata}
          columns={projColumns}
        />
      </Col>
    </Row>
  );
}
