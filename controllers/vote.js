module.exports = {
  getVote: (req,res)=>{
      res.sendFile('vote.html', {root: 'public/html'});
  }
}
