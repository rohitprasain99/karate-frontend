import { notificationEnum } from "@/utils/enum/notificationEnum";
import { showNotification } from "@mantine/notifications";

export default function showNotify(
  condition: notificationEnum,
  message: string
) {
  showNotification({
    // id: 'hello-there',
    // disallowClose: true,
    // onClose: () => console.log('unmounted'),
    // onOpen: () => console.log('mounted'),
    // title: "You've been compromised",
    autoClose: 5000,
    message,
    color: `${
      condition === notificationEnum.SUCCESS
        ? "green"
        : condition === notificationEnum.ERROR
        ? "red"
        : condition === notificationEnum.WARNING
        ? "yellow"
        : condition === notificationEnum.NOTIFY
        ? "blue"
        : ""
    }`,
    style: {
      backgroundColor: "whitesmoke",
      height: "60px",
      color: "white",
    },
    loading: false,
  });
}
