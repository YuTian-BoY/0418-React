import React, { Component } from 'react'
import { Card, Button, Icon, Table } from 'antd'
import LinkButton from '../../components/link-button';
import { reqCategorys } from '../../api'




/**
 * 分类管理
 */
export default class Category extends Component {
  state = {
    categorys: []
  }

  /* 异步获取所有分类列表显示 */
  getCategorys = async () => {
    const result = await reqCategorys()
    if (result.status === 0) {
      const categorys = result.data
      this.setState({
        categorys
      })
    }
  }


  componentDidMount() {
    this.getCategorys()
  }


  render() {
    const columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
      },
      {
        width: 300,
        title: '操作',
        render: () => <LinkButton>修改分类</LinkButton>
      },
    ];
    //取出状态数据 
    const { categorys } = this.state
    const extra = (
      <Button type='primary'>
        <Icon type='plus' />
        添加
      </Button>
    )

    return (
      <Card extra={extra}>
        <Table
          bordered
          dataSource={categorys}
          columns={columns}
        />
      </Card>
    )
  }
}
