import { Card } from "antd";
import { Button } from "antd";
import { useRouter } from "next/router";
const UserCard = ({ user, delHandler }) => {
  const router = useRouter();

  return (
    <div className="site-card-border-less-wrapper">
      <Card title={user.values.name} bordered={false}>
        <p>
          <span> email : </span>
          {user.values.email}
        </p>
        <p>address :{user.values.address}</p>
        <p>phone : {user.values.phone}</p>
        <Button
          type="primary"
          danger
          onClick={() => {
            delHandler(user.id);
          }}
          style={{ marginRight: "20px" }}
        >
          Delete
        </Button>
        <Button
          type="primary"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          Edit
        </Button>
      </Card>
    </div>
  );
};

export default UserCard;
