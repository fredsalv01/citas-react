import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Loading = () => {
  useEffect(() => {
    MySwal.fire({
      title: "Loading...",
      text: "Please wait...",
      icon: "info",
      timer: 2000,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      didOpen: () => {
        MySwal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        return;
      }
    });
  }, []);

  return null;
};

export default Loading;