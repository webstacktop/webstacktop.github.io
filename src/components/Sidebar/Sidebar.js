import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Menu from "antd/lib/menu"
import "antd/lib/menu/style/css"
import "./Sidebar.css"

const { SubMenu } = Menu

function convertData(arr) {
  var map = {},
    result = []
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (!map[item.frontmatter.folderNo]) {
      result.push({
        folderNo: item.frontmatter.folderNo,
        name: item.frontmatter.folder,
        data: [item],
      })
      map[item.frontmatter.folderNo] = item
    } else {
      for (var j = 0; j < result.length; j++) {
        var rsItem = result[j]
        if (rsItem.folderNo == item.frontmatter.folderNo) {
          rsItem.data.push(item)
          break
        }
      }
    }
  }
  return result
}
const Sidebar = props => {
  console.log("Sidebar", props)
  const menuArr = convertData(props.nodes)
  console.log("menu", menuArr)
  const defaultOpenKeys = menuArr.map(item => `${item.folderNo}`)
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <Menu
          defaultSelectedKeys={[props.currentPost.fields.slug]}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
        >
          {menuArr.map(item => (
            <SubMenu key={item.folderNo} title={<span>{item.name}</span>}>
              {item.data.map(subItem => (
                <Menu.Item key={subItem.fields.slug}>
                  <Link to={subItem.fields.slug}>
                    {subItem.frontmatter.title}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    </aside>
  )
}

export default Sidebar
