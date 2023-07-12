import { Layout, Typography, Divider } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const FooterSite = () => {
  return (
    <Footer className="site-footer">
      <Divider />
      <Text strong>
        For My Class Project by : Felix Farba NDAO, Mouhamadou Nazirou Diankha,
        Nafissa Ndiaye
      </Text>
    </Footer>
  );
};

export default FooterSite;
