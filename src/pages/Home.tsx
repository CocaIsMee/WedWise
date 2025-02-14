import ApartmentCard from "../component/card/index";
import { Row, Col } from "antd";

const apartments = [
  {
    id: 1, // Thêm id để dùng làm key
    title: "Căn hộ A - Quận 1",
    description: "4.5 triệu/tháng • 22m²",
    imageUrl: "/room-1.jpg",
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
  },
  {
    id: 2,
    title: "Căn hộ B - Quận 2",
    description: "5.5 triệu/tháng • 25m²",
    imageUrl: "/room-2.jpg",
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
  },
];

const Home: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách căn hộ</h2>
      <Row gutter={[16, 16]}>
        {apartments.map((apartment) => (
          <Col key={apartment.id} xs={24} sm={12} md={8} lg={6}>
            <ApartmentCard
              title={apartment.title}
              description={apartment.description}
              imageUrl={apartment.imageUrl}
              avatarUrl={apartment.avatarUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
