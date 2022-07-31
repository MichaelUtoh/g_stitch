import toast from "react-hot-toast";


export const notify = (message) => toast(message, {
    duration: 4000,
    position: 'top-center',
    style: {
        background: "#5a5a5a",
        color: "#fff",
        width: "100%"
    }
});