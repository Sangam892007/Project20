function isTouching(A,B){
    if (B.x - A.x <= A.width/2 + B.width/2 &&
        A.x - B.x <= A.width/2 + B.width/2 &&
        A.y - B.y <= A.height/2 + B.height/2 &&
        B.y - A.y <= A.height/2 + B.height/2){
       return true;
    }
    else {
       return false;
    
    }

}