import prompt from 'prompt'
import {exec} from 'child_process'

prompt.start()
prompt.message="";
prompt.get(
  [{
    name: "hackName",
    description: "Enter userhack's name",
    type: 'string',
    message: "Please don't use spaces",
  }],
  (err, result) => {
    console.log(result.hackName)
    exec(`npx create-react-app hacks/${result.hackName}`, (err, stdout, stderr) => {
      if (err) {
	return
      }
      console.log(stdout)
      console.log(stderr)
    })
  }
)


