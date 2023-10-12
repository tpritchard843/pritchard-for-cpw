module.exports = {
  getIssues: (req,res)=>{
      res.sendFile('issues.html', {root: 'public/html'});
  }
}
