import React from 'react';
import "./antLayout.css";
import 'antd/dist/antd.css';
import Info from "./component/Info"
import Card from "./component/card";
import { Layout} from 'antd';


const {Content } = Layout;

const Ant =() => {
    return (
    <Layout>
      
      <Content><Info> <Card /></Info></Content>
    </Layout>

);
}

export default Ant;