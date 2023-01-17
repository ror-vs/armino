import { Button, Modal, Input } from "antd";
const CustomModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  handleDeleteEvent,
}) => {
  return (
    <>
      <Modal
        title="Event Modal"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        {/* <h3>{title}</h3> */}
        <Input
          value={title}
          style={{ marginBottom: "10px", maxWidth: "400px" }}
        />
        {/* <p>{time}</p> */}
        <Button type="primary" onClick={handleDeleteEvent}>
          delete event
        </Button>
      </Modal>
    </>
  );
};
export default CustomModal;
