const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const Replicate = require('replicate');
const replicate = new Replicate({
  auth: 'r8_er5MlSWBPw3W7nNgOoaC3O10eRADL2N0bhjlD',
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



app.post("/generate" , async (req,res) =>{


    const output = await replicate.run(
        "lucataco/sdxl-lightning-4step:727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",
        {
          input: {
            seed: 2992471961,
            width: 1024,
            height: 1024,
            prompt: req.body.prompt,
            scheduler: "K_EULER",
            num_outputs: 4,
            guidance_scale: 0,
            negative_prompt: "worst quality, low quality",
            num_inference_steps: 4
          }
        }
      );


      res.send(output);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })