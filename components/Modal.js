import { Button, Modal, Input } from "antd";
const CustomModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  handleDeleteEvent,
  handleUpdate,
  setTitle,
}) => {
  return (
    <>
      <Modal
        title="Event Modal"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
      >
        {/* <h3>{title}</h3> */}
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
