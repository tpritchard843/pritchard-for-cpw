module.exports = {
  getAbout: (req,res)=>{
      res.sendFile('about.html', {root: 'public/html'});
  }
}
