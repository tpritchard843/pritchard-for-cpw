module.exports = {
  getIndex: (req,res)=>{
      res.sendFile('/public/html/index.html');
  }
}
