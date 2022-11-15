import { Card, Col, Row, Skeleton } from "antd";

interface SpinnerPostListProps {
  
}
 
const SpinnerPostList = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
          <Col className="gutter-row" span={8} key={value}>
            <Card style={{ width: '100%', marginBottom: 20 }}>
              <Skeleton.Image active />
              <Skeleton active />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
 
export default SpinnerPostList;