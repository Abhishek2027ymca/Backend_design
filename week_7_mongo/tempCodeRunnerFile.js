app.post("/todo", auth, async function (req, res) {

  // userId comes from auth middleware
  const userId = req.userId; // comes from auth middle ware 
  // post man ki body mein only input the   field of req.body.title

  const title = req.body.title ;
  if(!title){
    return res.status(400).json({
        message : "plz assign a valid title "
    })
  }

  await TodoModel.create({

    title:title ,
    done: false ,
    userId:userId


  })

  res.json({
    message:" todo created "
  })



//   res.json({
//     userid: userId
//   });
});