import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Alert = ({ message, type }) => {
  useEffect(() => {
    MySwal.fire({
      title: type,
      text: message,
      icon: type,
      confirmButtonText: "Ok",
    });
  }, [message, type]);

  return null;
};

export default Alert;
