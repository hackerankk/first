function changeColor(){
        let c =Math.floor(Math.random()*16777215).toString(16);
        
        let Color = "#" + c;
        // console.log(Color);
        return Color;
    }

export {changeColor}