const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true}));
app.use

app.get('/:operation/:firstNum/:secondNum', function(req, res) {
    const operation = req.params.operation;
    const firstNum = parseInt(req.params.operation);
    const secondNum = parseInt(req.params.operation);

    let result = 0;
switch (operation) {
    case "add":
        result = firstNum + secondNum;
        return result;

    default:
              result =
        'Sorry! The only valid operations are add, subtract, multiply, and divide.';
}
    console.log(result);
    res.send(result.toString());

});

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));