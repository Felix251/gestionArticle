import { Typography } from 'antd'
const { Title } = Typography
 
const HomePage = () => {
  return (
    <div className='alignCenter pt50'>
      <Title>React Template using:</Title>
      <Title level={2} type='secondary'>TypeScript, Ant Design, React Toolkit, RTK Query</Title>
    </div>
  )
}

export default HomePage
