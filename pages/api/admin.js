import admindata from "../../assets/admindata"

export default function admin(req, res) {
    res.status(200).json({data:admindata })
  }