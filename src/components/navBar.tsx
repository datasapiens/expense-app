import { Menu } from "antd"

const NavBar: React.FC = () => {
  return (
    <>
      <Menu>
        <Menu.Item key="autres" >
          <h1 className='title'>
            Expense Tracker
          </h1>
        </Menu.Item>
      </Menu>
    </>

  )
}

export default NavBar