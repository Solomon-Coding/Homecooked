const router = require('express').Router();
const Recipes = require('../../models/Recipes');
const nodemailer = require("nodemailer");
// const withAuth = require('../../utils/auth');

// router.get('/', withAuth ,async (req, res) => {
//   const recipesData = await Recipes.findAll().catch((err) => { 
//       res.json(err);
//     });
//       const recipes = recipesData.map((recipe) => recipe.get({ plain: true }));
//       res.render('recipes', { recipes });
//     });


// route to create/add a recipes using async/await
router.post('/', async (req, res) => {
  try { 
    const recipesData = await Recipes.create({
    name: req.body.name,
    author: req.body.author,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    category_id: req.body.category_id,
    style_id: req.body.style_id,
  });
  // if the recipes is successfully created, the new response will be returned as json
  res.status(200).json(recipesData)
} catch (err) {
  res.status(400).json(err);
}
});

router.post('/send', async (req, res) => {
  
  console.log(req.body)
  try { 
    const transporter = nodemailer.createTransport({
      service:"gmail",
      // host: "mail.gmail.com",
      // port: 587,
      // secure: false, // true for 465, false for other ports
      auth: {
        user: 'solomonvana18@gmail.com',
        pass: 'llpmdshovixykehd',
      }
      // ,
      // tls:{
      //   rejectUnauthorized:false
      // }
    });
    
    // send mail with defined transport object
    const mailOptions = {
      from: '"Homecooked" <homecooked@gmail.com>', // sender address
      to: `${req.body.recipient}`, // list of receivers
      subject: `${req.body.subject}`, // Subject line
      // text: "efv?", // plain text body
      html: `<b>${req.body.message}</b>`, // html body
    };
    
    await transporter.sendMail(mailOptions);
    console.log("Email sent")
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("viewRecipe", {msg:'Email sent'});
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  try { 
    const recipesData = await Recipes.update({
    name: req.body.name,
    author: req.body.author,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    category_id: req.body.category_id,
    style_id: req.body.style_id,
  },
  {
    where: {
      id: req.params.id,
    }
  });
  // if the recipes is successfully created, the new response will be returned as json
  res.status(200).json(recipesData)
} catch (err) {
  res.status(400).json(err);
}
});





module.exports = router;
